import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";;
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-article-supprimer',
  templateUrl: './article-supprimer.component.html',
  styleUrls: ['./article-supprimer.component.sass']
})
export class ArticleSupprimerComponent implements OnInit {

  article: Article = new Article();
  articles:Observable<Article[]>;
  val=[];
  keyword = 'name';
  constructor(private daoService: DaoService,public myapp: AppComponent) { 
    myapp.titre="Articles";
    daoService.baseUrl+="article";
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.val=[];
    this.daoService.getListeObjets().subscribe(data=>
      {
        for(let i=0;i<data.length;i++)
      this.val.push({"id":data[i].code,"name":data[i].code});
      });
  }


  supprimerArticle() {

    this.daoService.supprimerObjet(this.article.code)
      .subscribe(data => {
      //  this.reloadData();
      alert("Article supprimé")
        this.article = new Article();
        this.reloadData();
      }, error =>  alert("Suppression d'article échoué"));

    }

  

  selectEvent(item) {
    // do something with selected item

  this.article.code=item.name;
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
 
  }

}
