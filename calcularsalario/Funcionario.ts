export class Funcionario{
    private nome : string;
    private salario : number;
    private maxDiaria : number;
    private diarias : number;
    private bonus : number;

    public constructor(nome : string, salario : number = 0, maxDiaria : number = 0, 
                        diarias : number = 0, bonus : number = 0){
        this.nome = nome;
        this.salario = salario;
        this.maxDiaria = maxDiaria;
        this.diarias = diarias;
        this.bonus = bonus;
    }

    public getNome() : string{
        return this.nome;
    }
    public setNome(nome : string) : void{
        this.nome = nome;
    }

    public getSalario() : number{
        return this.salario;
    }
    public setSalario(salario : number) : void{
        this.salario = salario;
    }

    public getMaxDiaria() : number{
        return this.maxDiaria;
    }
    public setMaxDiaria(maxDiaria : number) : void{
        this.maxDiaria = maxDiaria;
    }

    public getDiarias() : number{
        return this.diarias;
    }
    public setDiarias(diarias : number) : void{
        this.diarias = diarias;
    }
    
    public setBonus(bonus : number) : void{
        this.bonus = bonus;
    }
    public getBonus() : number{
        return this.bonus;
    }

    public addDiaria() : boolean{
        return false;
    }

    public calSalario() : number{
        return 0;
    }

    public toString() : string{
        return `Nome: [${this.nome}] 
                \nMaximo de Diarias: [${this.maxDiaria}] 
                \nDiarias: [${this.diarias}]\n`;
    }
}