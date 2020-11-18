import { Component, OnInit } from '@angular/core';
import { Presence } from '../presence';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.sass']
})
export class PresenceComponent implements OnInit {

  presence:Presence = new Presence();
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { 
      myapp.titre="Presence";
      daoService.baseUrl+="presence";
    }

  ngOnInit(): void {
  }

  ajouterPresence() {
    this.presence.date=new Date().toISOString().substring(0, 10);
    const date=new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
    this.presence.id=this.presence.utilisateur.matricule+String(date.getTime()/100000);

         this.daoService.ajouterObjet(this.presence)
           .subscribe(data => {
             this.presence = new Presence();
             alert("Validation du présence réussi")
           }, error => console.log(JSON.stringify(error)));
   
         }
   

}


