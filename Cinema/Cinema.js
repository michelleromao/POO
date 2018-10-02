import { Cliente } from "./Cliente";
export class Cinema {
    constructor(numCadeira, cadeiras, estadoCadeira) {
        this.numCadeira = numCadeira;
        this.cadeiras = cadeiras;
        this.estadoCadeira = estadoCadeira;
    }
    getNumCadeira() {
        return this.numCadeira;
    }
    setNumCadeira(numCadeira) {
        this.numCadeira = this.numCadeira;
    }
    getCadeiras() {
        return this.cadeiras;
    }
    setCadeiras(cadeiras) {
        this.cadeiras = cadeiras;
    }
    getEstadoCadeira() {
        return this.estadoCadeira;
    }
    setEstadoCadeira(estadoCadeira) {
        this.estadoCadeira = estadoCadeira;
    }
    criarSala(numCadeira, cadeiras) {
        this.numCadeira = numCadeira;
        this.cadeiras = cadeiras;
    }
    reservar(id, fone, cadeira) {
        let cli = new Cliente(id, fone);
        for (let client of this.cadeiras) {
            if ((client !== undefined) && (client.getId() === id)) {
                return false;
            }
            else {
                for (let i = 0; i < this.estadoCadeira.length; i++) {
                    if (i === (cadeira - 1) && this.estadoCadeira[i] === 1) {
                        this.cadeiras[i] = cli;
                        this.estadoCadeira[i] = 0;
                        return true;
                    }
                }
            }
        }
    }
    cancelar(id) {
        for (let client of this.cadeiras) {
            if (client !== undefined && client.getId() === id) {
                const pos = this.cadeiras.indexOf(client);
                this.cadeiras.splice(pos, 1, undefined);
                this.estadoCadeira.splice(pos, 1, 1);
                return true;
            }
        }
    }
    toString() {
        let toStr = "";
        toStr += `Cadeiras [ ${this.cadeiras.join(' , ')} ]\n`;
        toStr += `Estado das Cadeiras [ ${this.estadoCadeira.join(' , ')} ]\n`;
        return toStr;
    }
}
