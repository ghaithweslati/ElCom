import { Activite } from './activite';
import { Odp } from './odp';
import { Utilisateur } from './utilisateur';

export class Tache {
    id: String;
    dateDeb:String;
    dateFin:String;
    utilisateur:Utilisateur = new Utilisateur();
    odp?:Odp = new Odp();
    activite:Activite = new Activite();
}