import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.sass']
})
export class UtilisateurComponent implements OnInit {

  action="Ajouter un utilisateur";
  utilisateurs: Observable<Utilisateur[]>;
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.daoService.baseUrl+="user";
    this.reloadData();
    
  }

  reloadData() {
    this.utilisateurs = this.daoService.getListeObjets();
  }

  ajouterUtilisateur() {

    if(this.action=="Ajouter un utilisateur")
    {
      this.daoService.ajouterObjet(this.utilisateur)
        .subscribe(data => {
          this.reloadData();
          this.utilisateur = new Utilisateur();
        }, error => alert("Ajout d'utilisateur échoué"));

      }
    else
    {
      this.daoService.ajouterObjet(this.utilisateur)
      .subscribe(data => {
        this.reloadData();
        this.action="Ajouter un utilisateur";
        this.utilisateur = new Utilisateur();
      }, error => alert("Modification d'utilisateur échoué"));
    }
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



}
