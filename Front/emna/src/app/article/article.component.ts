import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Article } from '../article';
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
  articles: Observable<Article[]>;
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) {

     }

  ngOnInit(): void {
    this.daoService.baseUrl+="article";
    this.reloadData();
  }

  reloadData() {
    this.articles = this.daoService.getListeObjets();
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

  ajouterProduit() {

 /*   if(this.action=="Ajouter un produit")
    {
      this.produit.odp.id=Number(this.id_odp);*/
      this.daoService.ajouterObjet(this.article)
        .subscribe(data => {
        //  this.reloadData();
          this.article = new Article();
        }, error => console.log(JSON.stringify(error)));

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

  charger()
  {
    for(let i=1;i<this.data.length;i++)
    {
      
        if(this.data[i].length==0)
        break;

        this.article.code=this.data[i].shift();
        this.article.projet=this.data[i].shift();
        this.article.type=this.data[i].shift();
        this.article.nbFile=this.data[i].shift();
        this.article.ultra=this.data[i].shift();
        this.article.simple=this.data[i].shift();
        this.article.tube=this.data[i].shift();


        this.ajouterProduit();
    }
    alert("Chargement réussit");

  }
}
