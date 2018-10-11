import { Funcionario } from "./Funcionario";
export class Sta extends Funcionario {
    constructor(nome, nivel, salario = 0, maxDiaria = 1, diarias = 0, bonus = 0) {
        super(nome, salario, maxDiaria, diarias, bonus);
        this.nivel = nivel;
    }
    getNivel() {
        return this.nivel;
    }
    setNivel(nivel) {
        this.nivel = nivel;
    }
    addDiaria() {
        if (super.getDiarias() === 0 && super.getDiarias() < 2) {
            super.setDiarias(super.getDiarias() + 1);
            super.setSalario(super.getSalario() + 100);
            return true;
        }
        else {
            return false;
        }
    }
    calSalario() {
        super.setSalario(3000 + (300 * this.nivel));
        let sal = super.getSalario();
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
        toStr += "STA \n";
        toStr += `Nome: [${super.getNome()}] \n`;
        toStr += `Salario: `;
        if (super.getBonus() > 0) {
            toStr += super.getBonus();
        }
        else {
            toStr += super.getSalario();
        }
        toStr += `\nNivel [${this.nivel}]\n`;
        return toStr;
    }
}
