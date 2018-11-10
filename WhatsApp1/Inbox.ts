import MSG from './MSG';
import User from './User';

export default class Inbox {
  public user: User;
  public msg: Array<MSG>;

  public constructor(user: User, msg: Array<MSG> = []) {
    this.user = user;
    this.msg = msg;
  }

  public getUser(): User {
    return this.user;
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public getMsg(): Array<MSG> {
    return this.msg;
  }

  public setMsg(msg: Array<MSG>): void {
    this.msg = msg;
  }

  public toString(): string {
    let str: string = `[${this.user}] : [${this.msg.join(' , ')}]\n`;
    return str;
  }
}
