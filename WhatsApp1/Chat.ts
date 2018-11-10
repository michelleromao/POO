import User from './User';
import Inbox from './Inbox';
import MSG from './MSG';

export default class Chat {
  private name: string;
  protected inboxes: Array<Inbox>;

  public constructor(name: string, inboxes: Array<Inbox> = []) {
    this.name = name;
    this.inboxes = inboxes;
  }

  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }

  public getInboxes(): Array<Inbox> {
    return this.inboxes;
  }

  public setInboxes(inboxes: Array<Inbox>): void {
    this.inboxes = inboxes;
  }

  public getMsgs(user: string): Array<MSG> {
    this.inboxes.map(inbox => {
      if (inbox.getUser().getUsername() === user) {
        const array: Array<MSG> = [];
        if (inbox.getMsg() !== undefined) {
          const messages: Array<MSG> = inbox.getMsg();
          inbox.setMsg(array);
          return messages;
        }
      }
    });
    return undefined;
  }

  public deliverZap(msg: MSG): boolean {
    this.inboxes.forEach(inbox => {
      inbox
        .getUser()
        .getChats()
        .map(chat => {
          if (chat.getName() === this.name) {
            const messages: Array<MSG> = [];
            messages.push(msg);
            inbox.setMsg(messages);
            return true;
          }
        });
    });
    return false;
  }

  public unreadCount(user: string): number {
    this.inboxes.map(inbox => {
      if (inbox.getUser().getUsername() === user) {
        return inbox.getMsg().length;
      }
    });
    return;
  }

  public addUserChat(user: User) {
    user.getChats().map(chats => {
      if (chats.getName() === this.name) {
        return undefined;
      }
      const msg: Array<MSG> = [];
      const inbox: Inbox = new Inbox(user, msg);
      this.inboxes.push(inbox);
      const chatUser: Chat = new Chat(user.getUsername(), this.inboxes);
      user.setChats(chatUser);
    });
  }

  public rmUserChat(user: User) {
    user.getChats().map(chats => {
      if (chats.getName() === this.name) {
        chats.getInboxes().map(inbox => {
          if (inbox.getUser().getUsername() === user.getUsername()) {
            const posChat: number = user.getChats().indexOf(chats);
            const posInboxes: number = chats.getInboxes().indexOf(inbox);
            chats.getInboxes().splice(posInboxes, 1);
            user.getChats().splice(posChat, 1);
          }
        });
      }
    });
  }

  public toString(): string {
    return `[${this.name}] : [${this.inboxes.join(' , ')}]\n`;
  }
}
