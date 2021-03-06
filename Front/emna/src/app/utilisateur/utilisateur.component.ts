import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Poste } from '../Poste';
import { Responsable } from '../responsable';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.sass']
})
export class UtilisateurComponent implements OnInit {

  action="Ajouter un utilisateur";
  utilisateurs: Observable<Utilisateur[]>;
  postes: Observable<Poste[]>;
  reponsables: Observable<Utilisateur[]>
  utilisateur: Utilisateur = new Utilisateur();
  estOperatrice=false;
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.daoService.baseUrl="http://localhost:8762/poste";
    this.postes= this.daoService.getListeObjets();
    this.daoService.baseUrl="http://localhost:8762/user";
    this.reponsables=this.daoService.getObjet("resp-mag");
    this.reloadData();
  }

  reloadData() {
    this.utilisateurs = this.daoService.getListeObjets();
  }

  ajouterUtilisateur() {

    if(this.utilisateur.poste.nom.includes("Operatrice"))
    this.daoService.baseUrl="http://localhost:8762/operatrice";
  else if(this.utilisateur.poste.nom=="Resp-Mag")
      this.daoService.baseUrl="http://localhost:8762/responsable";
    if(this.action=="Ajouter un utilisateur")
    {
      this.daoService.ajouterObjet(this.utilisateur)
        .subscribe(data => {
          this.daoService.baseUrl="http://localhost:8762/user";
          this.reloadData();
          this.utilisateur = new Utilisateur();
        }, error => alert("Ajout d'utilisateur échoué"));

      }
    else
    {
      this.daoService.ajouterObjet(this.utilisateur)
      .subscribe(data => {
        this.daoService.baseUrl="http://localhost:8762/user";
        this.reloadData();
        this.action="Ajouter un utilisateur";
        this.utilisateur = new Utilisateur();
      }, error => alert("Modification d'utilisateur échoué"));
    }
    this.daoService.baseUrl="http://localhost:8762/user";
  }


  supprimerUtilisateur(id: number) {

    if (confirm("Voulez vous vraiment supprimer cet utilisateur")) {
      {
        this.daoService.supprimerObjet(id)
        .subscribe(
          data => {this.reloadData();
          },
          error => alert("Suppression d'utilisateur échoué"));
          this.reloadData();
      }
    } 

  }


  initUtilisateur(user:Utilisateur)
  {
    this.utilisateur=Object.assign({}, user);
    this.action="Modifier l'utilisateur";
  }


  onChange(deviceValue) {
    this.estOperatrice=this.utilisateur.poste.nom.includes("Operatrice");
}

estOperatrice2(nom)
{
  return nom.includes('Operatrice');
}

}
