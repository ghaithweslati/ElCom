import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: Router) {
      this.daoService.baseUrl+="user";
     }

  ngOnInit(): void {
  }

  connecter()
  {
    this.daoService.getListeObjets().subscribe(data=>
      {
          let i=0;
          while(i<data.length&&data[i].matricule!=this.utilisateur.matricule&&data[i].mdp!=data[i].mdp)
          {
            i++;
          }
          if(i>=data.length)
          {
            alert("non");
          }
          else
          {
            if(i<data.length&&data[i].matricule==this.utilisateur.matricule&&data[i].mdp==data[i].mdp)
            {
              localStorage.setItem('user',JSON.stringify(data[i]));
              if(data[i].poste=="Admin")
              window.location.href = "http://localhost:4200/utilisateur";
              else if(data[i].poste=="Resp-Prod"||data[i].poste=="Plan-Log")
              window.location.href = "http://localhost:4200/odp";

            }
            else
            {
              alert("Mot de passe ou CIN incorrectes");
            }
          }

      });
  }

}
