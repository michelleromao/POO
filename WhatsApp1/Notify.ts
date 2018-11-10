export default class Notify {
  public chat: string;
  public unreadCount: number;

  public constructor(chat: string, unreadCount: number) {
    this.chat = chat;
    this.unreadCount = unreadCount;
  }

  public getChat(): string {
    return this.chat;
  }

  public setChat(chat: string): void {
    this.chat = chat;
  }

  public getUnreadCount(): number {
    return this.unreadCount;
  }

  public setUnreadCount(unreadCount: number): void {
    this.unreadCount = unreadCount;
  }

  public toString(): string {
    let str = '';
    str += `[${this.chat}] : [${this.unreadCount}]\n`;
    return str;
  }
}
