import { Article } from './article';

export class Odp {
    id: number;
    date:String;
    description:String;
    quantite:number;
    article:Article=new Article();
}