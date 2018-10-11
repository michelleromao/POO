import {Funcionario} from "./Funcionario";
export class Sta extends Funcionario {
    private nivel : number;

    public constructor(nome : string, nivel : number, salario : number = 0, maxDiaria : number = 1, 
                        diarias : number = 0, bonus : number = 0){
        super(nome,salario,maxDiaria,diarias,bonus);
        this.nivel = nivel;
    }
    public getNivel() : number{
        return this.nivel;
    }
    public setNivel(nivel : number) : void{
        this.nivel = nivel;
    }

    public addDiaria() : boolean{
        if (super.getDiarias() === 0 && super.getDiarias() < 2){
            super.setDiarias(super.getDiarias() + 1);
            super.setSalario(super.getSalario() + 100);
            return true;
        }else{
            return false;
        }
    }

    public calSalario() : number{
        super.setSalario(3000 + (300 * this.nivel));
        let sal : number = super.getSalario();
        return sal;
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
        toStr += "STA \n";
        toStr += `Nome: [${super.getNome()}] \n`
        toStr += `Salario: `
        if(super.getBonus() > 0){
            toStr+= super.getBonus();
        }else{
            toStr += super.getSalario();
        }
        toStr+= `\nNivel [${this.nivel}]\n`
        return toStr;
    }

}