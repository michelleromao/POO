import {Cinema} from "./Cinema";
import {Cliente} from "./Cliente";

let numCadeira : number;
let estadoCadeira : Array<number> = new Array(numCadeira);
let cadeiras : Array<Cliente> = new Array(numCadeira);
let sala : Cinema = new Cinema(numCadeira, cadeiras, estadoCadeira);

declare function require(msg : string) : any;
var readline = require('readline-sync');

export class Controller{
    private opc : number;

    public getOpc() : number{
        return this.opc;
    }
    public setOpc(opc : number) : void{
        this.opc = opc;
    }

    public menu() : void{
        console.log("BEM VINDO AO CINEMINHHA");
        console.log("0. Sair");
        console.log("1. Criar sala");
        console.log("2. Ver cadeiras");
        console.log("3. Reservar cadeira");
        console.log("4. Cancelar reserva");
        let opc = Number(readline.question("> "));
        this.operacao(opc);
    }

    public operacao(opc : number) : void{
        // let cont = true;
        this.opc = opc;
        do{
            switch(opc){
                case 0:
                    break;
                case 1: 
                    numCadeira = Number(readline.question("Numero de Cadeiras da sala: "));
                    for(let i = 0; i < numCadeira; i++){
                        estadoCadeira[i] = 1;
                    }
                    for(let i = 0; i < numCadeira; i++){
                        cadeiras[i] = undefined;
                    }
                    sala.criarSala(numCadeira,cadeiras);
                    break;
                case 2:
                    console.log(sala.toString());
                    break;
                case 3:
                    let id : number = Number(readline.question("Id cliente: "));
                    let tel : number = Number(readline.question("Telefone: "));
                    let cadeira : number = Number(readline.question("Cadeira: "));
                    if((sala.reservar(id, tel, cadeira)) === true){
                        console.log("ok");
                    }else{
                        console.log("erro.");
                    }
                    break;
                case 4:
                    id = Number(readline.question("Id do cliente: "));
                    if(sala.cancelar(id) === true){
                        console.log("ok");
                    }else{
                        console.log("Esse cliente nao esta nesta sala. Impossivel cancelar reserva.");
                    }
                    break;
                default:
                    console.log("Opção Inválida!");
                    break;
                }
            this.opc = opc;
            if(this.opc !== 0){
                this.menu();
            }
        }while(this.opc !== 0);    
    }
}