export default class MSG {
  public user: string;
  public text: string;

  public constructor(user: string, text: string) {
    this.user = user;
    this.text = text;
  }

  public getUser(): string {
    return this.user;
  }

  public setUser(user: string): void {
    this.user = user;
  }

  public getText(): string {
    return this.text;
  }

  public setText(text: string): void {
    this.text = text;
  }

  public toString(): string {
    let str = '';
    str += `[${this.user}] : [${this.text}]\n`;
    return str;
  }
}
