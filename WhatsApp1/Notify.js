export default class Notify {
    constructor(chat, unreadCount) {
        this.chat = chat;
        this.unreadCount = unreadCount;
    }
    getChat() {
        return this.chat;
    }
    setChat(chat) {
        this.chat = chat;
    }
    getUnreadCount() {
        return this.unreadCount;
    }
    setUnreadCount(unreadCount) {
        this.unreadCount = unreadCount;
    }
    toString() {
        let str = '';
        str += `[${this.chat}] : [${this.unreadCount}]\n`;
        return str;
    }
}
