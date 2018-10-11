import { Funcionario } from "./Funcionario";
export class Professor extends Funcionario {
    constructor(nome, classe, salario = 0, maxDiaria = 2, diarias = 0, bonus = 0) {
        super(nome, salario, maxDiaria, diarias, bonus);
        this.classe = classe;
    }
    getClasse() {
        return this.classe;
    }
    setClasse(classe) {
        this.classe = classe;
    }
    addDiaria() {
        if (super.getDiarias() >= 0 && super.getDiarias() < 2) {
            super.setDiarias(super.getDiarias() + 1);
            super.setSalario(super.getSalario() + 100);
            return true;
        }
        else {
            return false;
        }
    }
    calSalario() {
        let sal;
        switch (this.classe) {
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
    setBonus(bonus) {
        if (bonus > 0) {
            super.setBonus(super.getSalario() + bonus);
        }
        else {
            super.setBonus(0);
        }
    }
    toString() {
        let toStr = "";
        toStr += "PROFESSOR \n";
        toStr += `Nome: [${super.getNome()}] \n`;
        toStr += `Salario: `;
        if (super.getBonus() > 0) {
            toStr += super.getBonus();
        }
        else {
            toStr += super.getSalario();
        }
        toStr += `\nClasse: [${this.classe}]\n`;
        return toStr;
    }
}
