import Chat from './Chat';
import Notify from './Notify';
import MSG from './MSG';

export default class User {
  private username: string;
  protected chats: Array<Chat>;
  private notify: Array<Notify>;

  public constructor(
    username: string,
    chats: Array<Chat> = [],
    notify: Array<Notify> = []
  ) {
    this.username = username;
    this.chats = chats;
    this.notify = notify;
  }

  public getUsername(): string {
    return this.username;
  }
  public setUsername(username: string): void {
    this.username = username;
  }

  public getChats(): Array<Chat> {
    return this.chats;
  }
  public setChats(chats: Chat): void {
    this.chats.push(chats);
  }

  public getNotify(): Array<Notify> {
    this.chats.forEach(chats => {
      const notify: Notify = new Notify(
        chats.getName(),
        chats.unreadCount(this.username)
      );
      this.notify.push(notify);
      return this.notify;
    });
    return;
  }
  public setNotify(notify: Array<Notify>): void {
    this.notify = notify;
  }

  public sendMsg(idChat: string, text: string): MSG {
    this.chats.map(chat => {
      if (chat.getName() === idChat) {
        const msg: MSG = new MSG(this.username, text);
        chat.deliverZap(msg);
        return msg;
      }
    });
    return;
  }

  public toString(): string {
    return `[${this.username}]: [${this.chats.join(' , ')}]\n[${
      this.notify
    }]\n`;
  }
}
