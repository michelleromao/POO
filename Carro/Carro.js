export class Carro {
    constructor() {
        this.km = 0;
        this.gas = 0;
        this.p = 0;
    }
    show() {
        return ("Quilometragem: " + this.km + "\nGasolina: " + this.gas + "\nPessoas: " + this.p);
    }
    pIn() {
        if ((this.p < 2) && (this.p >= 0)) {
            this.p++;
        }
        else {
            console.log("Capacidade maxima de pessoas");
        }
    }
    pOut() {
        if (this.p > 0) {
            this.p--;
        }
        else {
            console.log("Nao ha pessoas no carro.");
        }
    }
    abastecer(litro) {
        if (this.gas == 10) {
            console.log("Quantidade maxima de combustivel");
        }
        else if ((this.gas + litro > 10)) {
            this.gas = 10;
        }
        else {
            this.gas += litro;
        }
    }
    andar() {
        if ((this.p >= 1) && (this.gas >= 1)) {
            this.gas--;
            this.km += 10;
        }
        else {
            console.log("Nao foi possivel realizar essa viagem.");
        }
    }
}
