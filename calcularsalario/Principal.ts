import {Funcionario} from "./Funcionario";
import {Professor} from "./Professor";
import {Sta} from "./Sta";
import {Ter} from "./Ter";

declare function require(msg : string) : any;
var readline = require('readline-sync');

let funcionarios : Funcionario[] = [];
let nome : string;
let salario : number;
let opc : number;

function addBonus(funcionarios : Funcionario[], bonus : number) : void{
    let v = (bonus/funcionarios.length);
    for(let f of funcionarios){
        f.setBonus(v);
    }
}

function addFuncionario(fun : Funcionario) : void{
    let a = 1;
    if(funcionarios.length === 0){
        funcionarios.push(fun);
    }else{
        for(let f of funcionarios){
            if(f.getNome() === fun.getNome()){
                console.log("Funcionario já cadastrado");
            }else{
                a = 0;
            }
        }
        if(a === 0){
            funcionarios.push(fun);
        }
    }
}

do{
    console.log("Calcular Salario $$");
    console.log("0. Sair");
    console.log("1. Adicionar funcionario");
    console.log("2. Mostrar funcionario");
    console.log("3. Remover funcionario");
    console.log("4. Adicionar diaria");
    console.log("5. Adicionar bonus");
    opc = Number(readline.question("> "));
    console.log("\n");

    switch(opc){
        case 0:
            break;
        case 1:
            console.log("1. Professor");
            console.log("2. STA");
            console.log("3. Terceirizado");
            let op : number = Number(readline.question("> "));
            if (op === 1){
                nome = readline.question("Nome: ");
                let classe : string = readline.question("Classe (A/B/C/D/E): ");
                let prof : Funcionario = new Professor(nome,classe);
                salario = prof.calSalario();
                prof.setSalario(salario);
                addFuncionario(prof);
                console.log("\n");
            }else if(op === 2){
                nome = readline.question("Nome: ");
                let nivel : number = Number(readline.question("Nivel(numero): "));
                let sta : Funcionario = new Sta(nome,nivel);
                salario = sta.calSalario();
                sta.setSalario(salario);
                addFuncionario(sta);
                console.log("\n");
            }else if(op === 3){
                nome = readline.question("Nome: ");
                let insalubre : number = Number(readline.question("Insalubre (1 / 0): "));
                let i : boolean;
                if(insalubre === 1){
                    i = true;
                }else if(insalubre === 0){
                    i = false;
                }else{
                    console.log("Resposta invalida.")
                    break;
                }
                let horas : number = Number(readline.question("Horas trabalhadas: "));
                let ter : Funcionario = new Ter(nome,i,horas);
                salario = ter.calSalario();
                ter.setSalario(salario);
                addFuncionario(ter)
                console.log("\n");
            }else{
                console.log("Invalido.");
                console.log("\n");
            }
            break;
        case 2: //mostrar
            let achou = 1;
            nome = readline.question("Nome: ");
            for(let fun of funcionarios){
                if(nome === fun.getNome()){
                    console.log(fun.toString());
                    break;
                }
            }
            
            break;
        case 3: //remover
            nome = readline.question("Nome: ");  
            achou = 1;  
            for(let fun of funcionarios){
                if(nome === fun.getNome()){
                    let pos : number = funcionarios.indexOf(fun);
                    funcionarios.splice(pos,1);
                    console.log("Removido.")
                    console.log("\n");
                }else{
                    achou = 0;
                }
            }
            if(achou === 0){
                console.log("Funcionario nao existe.");
                console.log("\n");
            }
            break;
        case 4: //adicionar diaria
            achou = 1;
            nome = readline.question("Nome: ");
            for (let fun of funcionarios){
                if(nome === fun.getNome()){
                    if(fun.addDiaria() === true){
                        console.log("Adicionado.")
                        console.log("\n");
                    }else{
                        console.log("Numero maximo de diarias");
                        console.log("\n");
                    }
                }else{
                    achou = 0;
                }
            }
            if(achou === 0){
                console.log("Funcionario nao existe.");
                console.log("\n");
            }
            
            break;
        case 5: //bonus
            let bonus : number = Number(readline.question("Bonus: "));
            addBonus(funcionarios,bonus);
            console.log("Adicionado. \n");
            break;
    }
}while(opc != 0);