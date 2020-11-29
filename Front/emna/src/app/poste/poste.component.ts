import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Poste } from '../Poste';
@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.sass']
})
export class PosteComponent implements OnInit {

  postes: Observable<Poste[]>;
  poste:Poste=new Poste();
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.poste.nom="";
    this.daoService.baseUrl+="poste";
    this.reloadData();
  }

  reloadData() {
    this.postes = this.daoService.getListeObjets();
  }

  ajouterPoste() {

    var nom = prompt("Entrer le nom du poste", this.poste.nom+"");
    if (nom != null) {
      this.poste.nom=nom;
      this.daoService.ajouterObjet(this.poste)
      .subscribe(data => {
        this.reloadData();
        this.poste = new Poste();
      }, error => alert("Ajout d'utilisateur échoué"));
    }
/*
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
    this.daoService.baseUrl="http://localhost:8762/user";*/
  }


  supprimerPoste(id: number) {

    if (confirm("Voulez vous vraiment supprimer ce poste")) {
      {
        this.daoService.supprimerObjet(id)
        .subscribe(
          data => {this.reloadData();
          },
          error => alert("Suppression du poste échoué"));
          this.reloadData();
      }
    } 
  }


  initPoste(poste:Poste)
  {
    this.poste=Object.assign({}, poste);
    this.ajouterPoste();
  }



}
