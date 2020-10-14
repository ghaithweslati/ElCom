import { Article } from './article';

export class Odp {
    id: number;
    date:String=new Date().toISOString().slice(0, 10);;
    description:String;
    quantite:number;
    urgence:boolean;
    etat:String;
    article:Article=new Article();
}