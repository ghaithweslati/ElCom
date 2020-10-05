import { Component, OnInit } from '@angular/core';
import { Activite } from '../activite';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.sass']
})
export class ActiviteComponent implements OnInit {

  activite:Activite = new Activite();
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { 
      myapp.titre="Activite";
      daoService.baseUrl+="activite";
    }

  ngOnInit(): void {
  }

  ajouterActivite() {
         this.daoService.ajouterObjet(this.activite)
           .subscribe(data => {
             this.activite = new Activite();
             alert("Ajout d'activité réussi")
           }, error => console.log(JSON.stringify(error)));
   
         }
   

}
