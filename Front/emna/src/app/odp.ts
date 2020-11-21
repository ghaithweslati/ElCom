import { Article } from './article';
import { Tache } from './tache';

export class Odp {
    id: number;
    date:String/*=new Date().toISOString().slice(0, 10);*/;
    description:String;
    quantite:number;
    urgence:number;
    etat:String;
    article:Article=new Article();
    taches:Tache[]=[];
}