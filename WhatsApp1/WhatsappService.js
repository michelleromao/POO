import User from './User';
import Chat from './Chat';
export default class WhatsappService {
    constructor(repUser = [], repChat = []) {
        this.repUser = repUser;
        this.repChat = repChat;
    }
    getRepUser() {
        return this.repUser;
    }
    setRepUser(repUser) {
        this.repUser = repUser;
    }
    getRepChat() {
        return this.repChat;
    }
    setRepChat(repChat) {
        this.repChat = repChat;
    }
    addUser(nome) {
        this.repUser.map(users => {
            if (this.repUser !== undefined) {
                if (users.getUsername() === nome) {
                    console.log('Este user ja existe.');
                    return;
                }
                let user = new User(nome);
                this.repUser.push(user);
                console.log('Adicionado.');
            }
            else {
                let user = new User(nome);
                this.repUser.push(user);
                console.log('Adicionado.');
            }
        });
    }
    createChat(user, chat) {
        this.repChat.map(chats => {
            if (chats.getName() === chat) {
                console.log('Esse chat ja existe');
                return undefined;
            }
            const newChat = new Chat(chat);
            this.repChat.push(newChat);
            this.repUser.map(users => {
                let bool = false;
                if (users.getUsername() === user) {
                    users.setChats(newChat);
                    bool = true;
                    console.log('Criado');
                }
                if (bool === false) {
                    return 'User inexistente';
                }
            });
        });
    }
    addByInvite(user, chat, userInvited) {
        this.repUser.map(users => {
            if (users.getUsername() === user) {
                users.getChats().map(chats => {
                    if (chats.getName() === chat) {
                        this.repUser.map(inviteds => {
                            if (users.getUsername() === userInvited) {
                                inviteds.getChats().map(invitedChats => {
                                    if (invitedChats.getName() === chat) {
                                        return undefined;
                                    }
                                    invitedChats.addUserChat(inviteds);
                                    console.log('Adicionado.');
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    toString() {
        return `${this.repUser.join(' , ')} : ${this.repChat.join(' , ')}`;
    }
}
