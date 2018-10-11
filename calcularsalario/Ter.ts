import {Funcionario} from "./Funcionario";
export class Ter extends Funcionario{
    private insalubre : boolean;
    private horas : number;

    public constructor(nome : string, insalubre : boolean, horas : number, salario : number = 0,
                        maxDiaria : number = 0, diarias : number = 0, bonus : number = 0){
        super(nome,salario,maxDiaria,diarias,bonus);
        this.insalubre = insalubre;
        this.horas = horas;
    }

    public isInsalubre() : boolean{
        return this.insalubre;
    }
    public setInsalubre(insalubre : boolean) : void{
        this.insalubre = insalubre;
    }
    public getHoras() : number{
        return this.horas;
    }
    public setHoras(horas : number) : void{
        this.horas = horas;
    }

    public addDiaria() : boolean{
        console.log("Nao pode receber diaria");
        return false;
    }

    public calSalario() : number{
        if (this.insalubre === true){
            super.setSalario((4*this.horas) + 500);
            return super.getSalario();
        }else{
            super.setSalario(4*this.horas);
            return super.getSalario();
        }   
    }

    public setBonus(bonus : number) : void{
        if (bonus > 0){
            super.setBonus(super.getSalario() + bonus);
        }else{
            super.setBonus(0);
        }  
    } 

    public toString() : string{
        let toStr : string = "";
        toStr += "TERCEIRIZADO \n";
        toStr += `Nome: [${super.getNome()}] \n`
        toStr += `Salario: `
        if(super.getBonus() > 0){
            toStr+= super.getBonus();
        }else{
            toStr += super.getSalario();
        }
        toStr+= `\nInsalubre: [${this.insalubre}] \n`
        toStr += `Horas: [${this.horas}]\n`;
        return toStr;

    }
}
