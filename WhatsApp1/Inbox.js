export default class Inbox {
    constructor(user, msg = []) {
        this.user = user;
        this.msg = msg;
    }
    getUser() {
        return this.user;
    }
    setUser(user) {
        this.user = user;
    }
    getMsg() {
        return this.msg;
    }
    setMsg(msg) {
        this.msg = msg;
    }
    toString() {
        let str = `[${this.user}] : [${this.msg.join(' , ')}]\n`;
        return str;
    }
}
