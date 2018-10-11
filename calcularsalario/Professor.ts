import {Funcionario} from "./Funcionario";
export class Professor extends Funcionario{
    private classe : string;
    
    public constructor(nome : string,classe : string, salario : number = 0, maxDiaria : number = 2,
                        diarias : number = 0, bonus : number = 0){
        super(nome,salario,maxDiaria,diarias,bonus);
        this.classe = classe;
    }

    public getClasse() : string{
        return this.classe;
    }
    public setClasse(classe : string) : void{
        this.classe = classe;
    }

    public addDiaria(): boolean{
        if(super.getDiarias() >= 0 && super.getDiarias() < 2){
            super.setDiarias(super.getDiarias() + 1);
            super.setSalario(super.getSalario() + 100);
            return true;
        }
        else{
            return false;
        }
    }

    public calSalario() : number{
        let sal : number;
        switch(this.classe){
            case ('A'):
                super.setSalario(super.getSalario() + 3000);
                sal = super.getSalario();
                break;
            case ('B'):
                super.setSalario(super.getSalario() + 5000);
                sal = super.getSalario();
                break;
            case ('C'):
                super.setSalario(super.getSalario() + 7000);
                sal = super.getSalario();
                break;
            case ('D'):
                super.setSalario(super.getSalario() + 9000);
                sal = super.getSalario();
                break;
            case ('E'):
                super.setSalario(super.getSalario() + 11000);
                sal = super.getSalario();
                break;
            default:
                break;
        }
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
        toStr += "PROFESSOR \n";
        toStr += `Nome: [${super.getNome()}] \n`
        toStr += `Salario: `
        if(super.getBonus() > 0){
            toStr+= super.getBonus();
        }else{
            toStr += super.getSalario();
        }
        toStr+= `\nClasse: [${this.classe}]\n`;
        return toStr;
    }
}