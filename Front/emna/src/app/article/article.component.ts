import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Article } from '../article';
import { Phase } from '../phase';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {

  data:[][];
  article: Article = new Article();
  articles:Observable<Article[]>;
  phases: Observable<Phase[]>;
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) {
      myapp.titre="Article"

     }

  ngOnInit(): void {
    this.daoService.baseUrl="http://localhost:8762/phase";
    this.reloadData();
    this.daoService.baseUrl="http://localhost:8762/article";
    
  }

  reloadData() {
    this.phases = this.daoService.getListeObjets();
  }

  onFileChanged(evt:any)
  {

    const target : DataTransfer = <DataTransfer>(evt.target);
    if(target.files.length!==1) 
      alert("On ne peut pas charger plusieurs fichier à la fois");
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

  ajouterArticle() {

      this.daoService.ajouterObjet(this.article)
        .subscribe(data => {
        //  this.reloadData();
        alert("Ajout d'article réussi")
          this.article = new Article();
        }, error => alert(JSON.stringify(error)));

      }
/*    else
    {
      this.daoService.ajouterObjet(this.produit)
      .subscribe(data => {
        this.reloadData();
        this.action="Ajouter un produit";
        this.produit = new Produit();
      }, error => alert("Modification du produit échoué"));
    }
  }*/

  


  onCheckboxChange(e,phase:Phase) {
  
  
    if (e.target.checked) {
      this.article.phases.push(phase);
    } else {
      this.article.phases=this.article.phases.filter(function(el) { return el.id != phase.id; });
    }
  }
}
