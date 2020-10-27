import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { AppComponent } from '../app.component';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements OnInit {


  etat="Choisir un fichier";
  article: Article = new Article();
  data:[][];
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: Router) { 
      myapp.titre="Liste articles";
      daoService.baseUrl+="article";
    }

  ngOnInit(): void {

  }

  charger()
  {
    for(let i=1;i<this.data.length;i++)
    {
      
        this.article.code=this.data[i].shift();
        this.article.projet=this.data[i].shift();
        this.article.type=this.data[i].shift();
        this.article.nbFile=this.data[i].shift();
        this.ajouterArticle();
       
    }
    alert("chargement réussit");

  }

  ajouterArticle() {
    this.etat="Choisir un fichier";
      this.daoService.ajouterObjet(this.article)
        .subscribe(data => {
        }, error => console.log(JSON.stringify(error.error.message)));
  }

  
  
  onFileChanged(evt:any)
  {
    
    const target : DataTransfer = <DataTransfer>(evt.target);
    if(target.files.length!==1) 
      alert("On ne peut pas charger plusieurs fichier à la fois");
      this.etat="Fichier séléctionné"
      const reader:FileReader = new FileReader();
      reader.onload = (e:any ) =>
      {
      const bstr : string = e.target.result;
      const wb : XLSX.WorkBook = XLSX.read(bstr,{type:'binary'});
      const wsname : string = wb.SheetNames[0];
      const ws : XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = (XLSX.utils.sheet_to_json(ws,{header:1}));
     /* for(let i=0;i<this.data.length;i++)
          alert(JSON.stringify(this.data[i]))
      */ 
      };
      reader.readAsBinaryString(target.files[0]);
  }



}
