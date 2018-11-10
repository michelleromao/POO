import Inbox from './Inbox';
export default class Chat {
    constructor(name, inboxes = []) {
        this.name = name;
        this.inboxes = inboxes;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getInboxes() {
        return this.inboxes;
    }
    setInboxes(inboxes) {
        this.inboxes = inboxes;
    }
    getMsgs(user) {
        this.inboxes.map(inbox => {
            if (inbox.getUser().getUsername() === user) {
                const array = [];
                if (inbox.getMsg() !== undefined) {
                    const messages = inbox.getMsg();
                    inbox.setMsg(array);
                    return messages;
                }
            }
        });
        return undefined;
    }
    deliverZap(msg) {
        this.inboxes.forEach(inbox => {
            inbox
                .getUser()
                .getChats()
                .map(chat => {
                if (chat.getName() === this.name) {
                    const messages = [];
                    messages.push(msg);
                    inbox.setMsg(messages);
                    return true;
                }
            });
        });
        return false;
    }
    unreadCount(user) {
        this.inboxes.map(inbox => {
            if (inbox.getUser().getUsername() === user) {
                return inbox.getMsg().length;
            }
        });
        return;
    }
    addUserChat(user) {
        user.getChats().map(chats => {
            if (chats.getName() === this.name) {
                return undefined;
            }
            const msg = [];
            const inbox = new Inbox(user, msg);
            this.inboxes.push(inbox);
            const chatUser = new Chat(user.getUsername(), this.inboxes);
            user.setChats(chatUser);
        });
    }
    rmUserChat(user) {
        user.getChats().map(chats => {
            if (chats.getName() === this.name) {
                chats.getInboxes().map(inbox => {
                    if (inbox.getUser().getUsername() === user.getUsername()) {
                        const posChat = user.getChats().indexOf(chats);
                        const posInboxes = chats.getInboxes().indexOf(inbox);
                        chats.getInboxes().splice(posInboxes, 1);
                        user.getChats().splice(posChat, 1);
                    }
                });
            }
        });
    }
    toString() {
        return `[${this.name}] : [${this.inboxes.join(' , ')}]\n`;
    }
}
