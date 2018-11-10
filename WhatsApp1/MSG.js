export default class MSG {
    constructor(user, text) {
        this.user = user;
        this.text = text;
    }
    getUser() {
        return this.user;
    }
    setUser(user) {
        this.user = user;
    }
    getText() {
        return this.text;
    }
    setText(text) {
        this.text = text;
    }
    toString() {
        let str = '';
        str += `[${this.user}] : [${this.text}]\n`;
        return str;
    }
}
