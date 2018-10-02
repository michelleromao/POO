export class Cliente {
    constructor(id, telefone) {
        this.id = id;
        this.telefone = telefone;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    toString() {
        return `Id: ${this.id} Telefone: ${this.telefone}`;
    }
}
