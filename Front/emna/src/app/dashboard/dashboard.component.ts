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

}
