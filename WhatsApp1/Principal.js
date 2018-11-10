import WhatsappService from './WhatsappService';
var readline = require('readline-sync');
let users = [];
let chats = [];
let opc;
let o;
let op;
do {
    let wp = new WhatsappService();
    console.log('MENUZIN');
    console.log('1. Cadastrar usuario');
    console.log('2. Ver usuarios cadastrados');
    console.log('3. Selecionar usuario');
    console.log('0. Sair');
    opc = Number(readline.question('> '));
    switch (opc) {
        // MENU PRINCIPAL
        case 0:
            break;
        case 1:
            let nome = readline.question('Nome do user: ');
            wp.addUser(nome);
            break;
        case 2:
            console.log(wp.getRepUser());
            break;
        // MENU DO USUÁRIO
        case 3:
            nome = readline.question('Nome do user: ');
            do {
                console.log(`Whatsapp do ${nome}\n
      1. Criar grupo\n
      2. Ver grupos\n
      3. Selecionar grupo\n
      4. Ver notificações\n
      5. Sair`);
                op = Number(readline.question('> '));
                switch (op) {
                    case 1:
                        let chat = readline.question('Nome do grupo: ');
                        wp.createChat(nome, chat);
                        break;
                    case 2:
                        wp.getRepUser().map(user => {
                            if (user.getUsername() === nome) {
                                console.log(user.getChats().join(' , '));
                            }
                        });
                        break;
                    //MENU DO GRUPO
                    case 3:
                        chat = readline.question('Nome do grupo: ');
                        do {
                            console.log(`1. Adicionar usuario no grupo\n
          2. Ver usuarios do grupo\n
          3. Mandar mensagem\n
          4. Ler mensagens\n
          5. Sair do grupo\n
          6. Voltar para menu usuario`);
                            o = Number(readline.question('> '));
                            switch (o) {
                                case 1:
                                    let userInvited = readline.question('Convidar: ');
                                    wp.addByInvite(nome, chat, userInvited);
                                    break;
                                case 2:
                                    wp.getRepChat().map(group => {
                                        if (group.getName() === chat) {
                                            group.getInboxes().map(users => {
                                                console.log(users.getUser().toString());
                                            });
                                        }
                                    });
                                    break;
                                case 3:
                                    let text = readline.question('Mensagem: ');
                                    wp.getRepUser().map(user => {
                                        if (user.getUsername() === name) {
                                            wp.getRepChat().map(group => {
                                                if (group.getName() === chat) {
                                                    if (group.deliverZap(user.sendMsg(chat, text)) === true) {
                                                        console.log('Mensagem enviada.');
                                                    }
                                                    else {
                                                        console.log('Nao foi possivel enviar a mensagem.');
                                                    }
                                                }
                                            });
                                        }
                                    });
                                    break;
                                case 4:
                                    wp.getRepChat().map(group => {
                                        if (group.getName() === chat) {
                                            group.getMsgs(name);
                                        }
                                    });
                                    break;
                                case 5:
                                    wp.getRepUser().map(user => {
                                        if (user.getUsername() === name) {
                                            wp.getRepChat().map(group => {
                                                if (group.getName() === name) {
                                                    group.rmUserChat(user);
                                                }
                                            });
                                        }
                                    });
                                    break;
                                case 6:
                                    break;
                                default:
                                    console.log('Opção Inválida!');
                                    break;
                            }
                        } while (o !== 6);
                        break;
                    case 4:
                        wp.getRepUser().map(user => {
                            if (user.getUsername() === name) {
                                user.getNotify();
                            }
                        });
                        break;
                    case 5:
                        break;
                    default:
                        console.log('Opção inválida');
                        break;
                }
            } while (op !== 5);
        default:
            console.log('Opção inválida');
            break;
    }
} while (opc != 0);
