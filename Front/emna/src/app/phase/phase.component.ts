import { Component, OnInit } from '@angular/core';
import { Phase } from '../phase';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.sass']
})
export class PhaseComponent implements OnInit {

  phase:Phase = new Phase();
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { 
      myapp.titre="Phase";
      daoService.baseUrl+="phase";
    }

  ngOnInit(): void {
  }

  ajouterPhase() {
         this.daoService.ajouterObjet(this.phase)
           .subscribe(data => {
             this.phase = new Phase();
             alert("Ajout du phase réussi")
           }, error => console.log(JSON.stringify(error)));
   
         }
   

}
