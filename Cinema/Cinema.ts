import {Cliente} from "./Cliente";
export class Cinema{
    private numCadeira : number;
    private cadeiras : Array<Cliente>;
    private estadoCadeira : Array<number>;

    public constructor(numCadeira : number, cadeiras : Array<Cliente>, estadoCadeira : Array<number>){
        this.numCadeira = numCadeira;
        this.cadeiras = cadeiras;
        this.estadoCadeira = estadoCadeira;
    }

    public getNumCadeira() : number{
        return this.numCadeira;
    }
    public setNumCadeira(numCadeira : number) : void{
         this.numCadeira = this.numCadeira;
    }

    public getCadeiras() : Array<Cliente>{
        return this.cadeiras;
    }
    public setCadeiras(cadeiras : Array<Cliente>) : void{
        this.cadeiras = cadeiras;
    }

    public getEstadoCadeira() : Array<number>{
        return this.estadoCadeira;
    }
    public setEstadoCadeira(estadoCadeira : Array<number>){
        this.estadoCadeira = estadoCadeira;
    }

    public criarSala(numCadeira : number, cadeiras : Array<Cliente>) : void{
        this.numCadeira = numCadeira;
        this.cadeiras = cadeiras;
    }

    public reservar(id : number, fone : number, cadeira : number): boolean{
        let cli : Cliente = new Cliente(id, fone);
        for(let client of this.cadeiras){
            if((client !== undefined) && (client.getId() === id)){
                return false;
            }else{
                for(let i = 0; i < this.estadoCadeira.length; i++){
                    if(i === (cadeira - 1) && this.estadoCadeira[i] === 1){
                        this.cadeiras[i] = cli;
                        this.estadoCadeira[i] = 0;
                        return true;
                    }
                }
            }
        }
    }

    public cancelar(id : number) : boolean {
        for(let client of this.cadeiras){
            if(client !== undefined && client.getId() === id){
                const pos = this.cadeiras.indexOf(client);
                this.cadeiras.splice(pos, 1, undefined);
                this.estadoCadeira.splice(pos, 1, 1);
                return true;
            }
        }
    }

    public toString() : string {
        let toStr : string = "";
        toStr += `Cadeiras [ ${this.cadeiras.join(' , ')} ]\n`;
        toStr += `Estado das Cadeiras [ ${this.estadoCadeira.join(' , ')} ]\n`;
        return toStr;
    } 
} 
