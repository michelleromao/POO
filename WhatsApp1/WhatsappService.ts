import User from './User';
import Chat from './Chat';

export default class WhatsappService {
  private repUser: Array<User>;
  private repChat: Array<Chat>;

  public constructor(repUser: Array<User> = [], repChat: Array<Chat> = []) {
    this.repUser = repUser;
    this.repChat = repChat;
  }

  public getRepUser(): Array<User> {
    return this.repUser;
  }
  public setRepUser(repUser: Array<User>): void {
    this.repUser = repUser;
  }

  public getRepChat(): Array<Chat> {
    return this.repChat;
  }
  public setRepChat(repChat: Array<Chat>): void {
    this.repChat = repChat;
  }

  public addUser(nome: string): void {
    this.repUser.map(users => {
      if (this.repUser !== undefined) {
        if (users.getUsername() === nome) {
          console.log('Este user ja existe.');
          return;
        }
        let user: User = new User(nome);
        this.repUser.push(user);
        console.log('Adicionado.');
      } else {
        let user: User = new User(nome);
        this.repUser.push(user);
        console.log('Adicionado.');
      }
    });
  }

  public createChat(user: string, chat: string): void {
    this.repChat.map(chats => {
      if (chats.getName() === chat) {
        console.log('Esse chat ja existe');
        return undefined;
      }
      const newChat: Chat = new Chat(chat);
      this.repChat.push(newChat);
      this.repUser.map(users => {
        let bool: boolean = false;
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

  public addByInvite(user: string, chat: string, userInvited: string) {
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

  public toString(): string {
    return `${this.repUser.join(' , ')} : ${this.repChat.join(' , ')}`;
  }
}
