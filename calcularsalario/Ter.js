import { Funcionario } from "./Funcionario";
export class Ter extends Funcionario {
    constructor(nome, insalubre, horas, salario = 0, maxDiaria = 0, diarias = 0, bonus = 0) {
        super(nome, salario, maxDiaria, diarias, bonus);
        this.insalubre = insalubre;
        this.horas = horas;
    }
    isInsalubre() {
        return this.insalubre;
    }
    setInsalubre(insalubre) {
        this.insalubre = insalubre;
    }
    getHoras() {
        return this.horas;
    }
    setHoras(horas) {
        this.horas = horas;
    }
    addDiaria() {
        console.log("Nao pode receber diaria");
        return false;
    }
    calSalario() {
        if (this.insalubre === true) {
            super.setSalario((4 * this.horas) + 500);
            return super.getSalario();
        }
        else {
            super.setSalario(4 * this.horas);
            return super.getSalario();
        }
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
        toStr += "TERCEIRIZADO \n";
        toStr += `Nome: [${super.getNome()}] \n`;
        toStr += `Salario: `;
        if (super.getBonus() > 0) {
            toStr += super.getBonus();
        }
        else {
            toStr += super.getSalario();
        }
        toStr += `\nInsalubre: [${this.insalubre}] \n`;
        toStr += `Horas: [${this.horas}]\n`;
        return toStr;
    }
}
