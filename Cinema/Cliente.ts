export class Cliente{
    private id : number;
    private telefone : number;
    
    public constructor(id : number, telefone : number){
        this.id = id;
        this.telefone = telefone;
    } 

    public getId() : number{
        return this.id;
    }

    public setId(id : number) : void{
        this.id = id;
    }
    public getTelefone() : number{
        return this.telefone;
    }
    public setTelefone(telefone : number) : void{
        this.telefone = telefone;
    }

    public toString() : string{
        return `Id: ${this.id} Telefone: ${this.telefone}`;
    }
}