import { Phase } from './phase';

export class Activite {
    id: number;
    nom:String;
    phase?:Phase=new Phase();
}