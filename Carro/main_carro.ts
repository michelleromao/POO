import { Carro } from "./Carro";

declare function require(msg : string) : any;
var readline = require('readline-sync');

let opc : number;
let c : Carro = new Carro();

do{
    console.log("\n~ DIRIGINDO MEU CARRO VRUM VRUM ~");
    console.log("0. Acabar o role");
    console.log("1. Estado do carro");
    console.log("2. Entrar pessoa"); 
    console.log("3. Sair pessoa");
    console.log("4. Abastecer");
    console.log("5. Andar");
    opc = Number(readline.question("> "));

    switch(opc){
        case 1:
            console.log(c.show());
            break;
        case 2:
            c.pIn();
            break;
        case 3:
            c.pOut();
            break;
        case 4:
            let litro : number = Number(readline.question("Quantidade de gasolina para abastecer: "));
            c.abastecer(litro);
            console.log("Carro abastecido!");
            break;
        case 5:
            c.andar();
            break;
        case 0:
            break;
        default:
            console.log("Opcao invalida.");
            break;
    }
}while(opc!=0);
console.log("Role acabou.");
