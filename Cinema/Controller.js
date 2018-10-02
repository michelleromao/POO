import { Cinema } from "./Cinema";
let numCadeira;
let estadoCadeira = new Array(numCadeira);
let cadeiras = new Array(numCadeira);
let sala = new Cinema(numCadeira, cadeiras, estadoCadeira);
var readline = require('readline-sync');
export class Controller {
    getOpc() {
        return this.opc;
    }
    setOpc(opc) {
        this.opc = opc;
    }
    menu() {
        console.log("BEM VINDO AO CINEMINHHA");
        console.log("0. Sair");
        console.log("1. Criar sala");
        console.log("2. Ver cadeiras");
        console.log("3. Reservar cadeira");
        console.log("4. Cancelar reserva");
        let opc = Number(readline.question("> "));
        this.operacao(opc);
    }
    operacao(opc) {
        // let cont = true;
        this.opc = opc;
        do {
            switch (opc) {
                case 0:
                    break;
                case 1:
                    numCadeira = Number(readline.question("Numero de Cadeiras da sala: "));
                    for (let i = 0; i < numCadeira; i++) {
                        estadoCadeira[i] = 1;
                    }
                    for (let i = 0; i < numCadeira; i++) {
                        cadeiras[i] = undefined;
                    }
                    sala.criarSala(numCadeira, cadeiras);
                    break;
                case 2:
                    console.log(sala.toString());
                    break;
                case 3:
                    let id = Number(readline.question("Id cliente: "));
                    let tel = Number(readline.question("Telefone: "));
                    let cadeira = Number(readline.question("Cadeira: "));
                    if ((sala.reservar(id, tel, cadeira)) === true) {
                        console.log("ok");
                    }
                    else {
                        console.log("erro.");
                    }
                    break;
                case 4:
                    id = Number(readline.question("Id do cliente: "));
                    if (sala.cancelar(id) === true) {
                        console.log("ok");
                    }
                    else {
                        console.log("Esse cliente nao esta nesta sala. Impossivel cancelar reserva.");
                    }
                    break;
                default:
                    console.log("Opção Inválida!");
                    break;
            }
            this.opc = opc;
            if (this.opc !== 0) {
                this.menu();
            }
        } while (this.opc !== 0);
    }
}
