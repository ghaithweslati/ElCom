import { Component, OnInit } from '@angular/core';
import { Phase } from '../phase';
import { Article } from '../article';
import { Odp } from '../odp';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  phases: Observable<Phase[]>;
  odps: Observable<Odp[]>;
  odp:Odp=new Odp();
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.daoService.baseUrl="http://localhost:8761/phase";
    this.phases = this.daoService.getListeObjets();
    this.daoService.baseUrl="http://localhost:8761/odp";
    this.odps=this.daoService.getListeObjets();  
  }

  verif(id:String,article:Article)
  {
    for(let i=0;i<article.phases.length;i++)
      if(article.phases[i].id==id)
        return "p-3 mb-2 bg-white text-dark";
    //return "";
  }

  
  verif2(id:String,article:Article)
  {
    for(let i=0;i<article.phases.length;i++)
      if(article.phases[i].id==id)
        return "";
    return "N";
  }

  urgence(urg:boolean)
  {
    if(urg)
      return "Oui";
    else
      return "";
  }

  modifierUrgence(odp)
  {
    odp.urgence=!odp.urgence;
      this.daoService.ajouterObjet(odp)
        .subscribe(data => {
        }, error => console.log("Modification du odp échoué"));

  }

  initOdp(odp:Odp)
  {
    this.odp=Object.assign({}, odp);;
  }


  modifierEtat()
  {
      this.daoService.ajouterObjet(this.odp)
        .subscribe(data => {
          this.odps=this.daoService.getListeObjets();
        }, error => console.log("Modification du odp échoué"));
  }

}
