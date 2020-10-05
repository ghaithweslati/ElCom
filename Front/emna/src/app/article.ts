import { Phase } from './phase';

export class Article {
    code:String;
    projet:String;
    type:String;
    nbFile:Number;
    phases:Phase[]=[];
}