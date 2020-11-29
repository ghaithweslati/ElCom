import { Poste } from './Poste';
import { Responsable } from './responsable';

export class Utilisateur {

    matricule:String;
    nom:String;
    prenom:String;
    mdp?:String;
    age:number;
    sexe:String;
    poste:Poste=new Poste();
    responsable?:Responsable=new Responsable();
}