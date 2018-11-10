import Notify from './Notify';
import MSG from './MSG';
export default class User {
    constructor(username, chats = [], notify = []) {
        this.username = username;
        this.chats = chats;
        this.notify = notify;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
    getChats() {
        return this.chats;
    }
    setChats(chats) {
        this.chats.push(chats);
    }
    getNotify() {
        this.chats.forEach(chats => {
            const notify = new Notify(chats.getName(), chats.unreadCount(this.username));
            this.notify.push(notify);
            return this.notify;
        });
        return;
    }
    setNotify(notify) {
        this.notify = notify;
    }
    sendMsg(idChat, text) {
        this.chats.map(chat => {
            if (chat.getName() === idChat) {
                const msg = new MSG(this.username, text);
                chat.deliverZap(msg);
                return msg;
            }
        });
        return;
    }
    toString() {
        return `[${this.username}]: [${this.chats.join(' , ')}]\n[${this.notify}]\n`;
    }
}
