import { Odp } from './odp';

export class Produit {
    id: number;
    article:String;
    quantite:number;
    type:String;
    periorite:boolean;
    odp:Odp = new Odp();
}