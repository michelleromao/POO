export class Funcionario {
    constructor(nome, salario = 0, maxDiaria = 0, diarias = 0, bonus = 0) {
        this.nome = nome;
        this.salario = salario;
        this.maxDiaria = maxDiaria;
        this.diarias = diarias;
        this.bonus = bonus;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    getMaxDiaria() {
        return this.maxDiaria;
    }
    setMaxDiaria(maxDiaria) {
        this.maxDiaria = maxDiaria;
    }
    getDiarias() {
        return this.diarias;
    }
    setDiarias(diarias) {
        this.diarias = diarias;
    }
    setBonus(bonus) {
        this.bonus = bonus;
    }
    getBonus() {
        return this.bonus;
    }
    addDiaria() {
        return false;
    }
    calSalario() {
        return 0;
    }
    toString() {
        return `Nome: [${this.nome}] 
                \nMaximo de Diarias: [${this.maxDiaria}] 
                \nDiarias: [${this.diarias}]\n`;
    }
}
