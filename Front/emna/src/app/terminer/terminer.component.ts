import { Component, OnInit } from '@angular/core';
import { Activite } from '../activite';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Tache } from '../tache';

@Component({
  selector: 'app-terminer',
  templateUrl: './terminer.component.html',
  styleUrls: ['./terminer.component.sass']
})
export class TerminerComponent implements OnInit {

  tache:Tache = new Tache();
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { 
      myapp.titre="Activite";
      daoService.baseUrl+="tache"
    }

  ngOnInit(): void {
  }


  terminerTache() {

    
    this.daoService.getObjet2(this.tache.utilisateur.matricule," ")
    .subscribe(data => {
      

      data[0].dateFin=new Date().toISOString().substring(0, 10);
     
         this.daoService.ajouterObjet(data[0])
           .subscribe(data => {
             this.tache=new Tache();
             alert("Fin d'activité reussit")
           }, error => 
           {
             alert(JSON.stringify(error));
            this.tache=new Tache();
            if((error.error.message).includes("odp"))
             alert("Fin d'activité reussit")
            else
              alert("Matirucle  inexistant")
            }
          );
    }, error => console.log(JSON.stringify(error)));

  }

}
