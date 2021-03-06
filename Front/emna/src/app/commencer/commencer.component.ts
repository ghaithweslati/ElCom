import { Component, OnInit } from '@angular/core';
import { Activite } from '../activite';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Tache } from '../tache';

@Component({
  selector: 'app-commencer',
  templateUrl: './commencer.component.html',
  styleUrls: ['./commencer.component.sass']
})
export class CommencerComponent implements OnInit {

  tache:Tache = new Tache();
  afficher:Boolean=false;
  taches=[];
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { 
      myapp.titre="Activite";
    }

  ngOnInit(): void {
  }

  getActivite() {
    this.daoService.baseUrl="http://localhost:8762/activite";
         this.daoService.getObjet(this.tache.activite.id)
           .subscribe(data => {
             this.taches=data.taches;
             this.tache.activite.id=data.id;
             this.tache.activite.phase.id=data.phase.id;
             this.afficher=true;
           }, error => console.log(JSON.stringify(error)));
   
         }

  ajouterTache() {
    this.daoService.baseUrl="http://localhost:8762/tache"

    this.daoService.getObjet2(this.tache.utilisateur.matricule," ")
    .subscribe(data => { 
    if(data.length>0)
      alert("Vous ne pouvez commencer une activité que après la clôture d'activité courante")
    else{
    this.tache.dateDeb=new Date().toISOString().substring(0, 10);
    this.tache.dateFin=" ";


    //alert(this.taches[this.taches.length-1].dateFin)

         this.daoService.ajouterObjet(this.tache)
           .subscribe(data => {
             this.afficher=false;
             this.tache=new Tache();
             alert("Commencement d'activité reussit")
           }, error => 
           {
            this.tache=new Tache();
            if((error.error.message).includes("Cette activité n'est en pas encore terminé"))
              alert("Cette activité n'est en pas encore terminé");
            else if((error.error.message).includes("odp"))
             alert("Commencement d'activité reussit")
            else
              alert("Matirucle ou Activite inexistant")
            }
  
          
          
          );
          }
        });
  
        }
        
      
}
