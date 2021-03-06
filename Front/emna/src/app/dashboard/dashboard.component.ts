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
  article:Article = new Article();
  ids=[];
  visible=false;
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.daoService.baseUrl="http://localhost:8762/phase";
    this.phases = this.daoService.getListeObjets();
    this.daoService.baseUrl="http://localhost:8762/odp";
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
        return true;
    return false;
  }

  getOperatrice(taches,id)
  {
    for(let i=0;i<taches.length;i++)
      if(taches[i].activite.phase.id==id)
        return taches[i].utilisateur.nom+" "+taches[i].utilisateur.prenom
    
      return " "
  }


  
  modifierUrgence()
  {
      this.daoService.ajouterObjet(this.odp)
        .subscribe(data => {
          this.reloadData();
        }, error => console.log("Modification du odp échoué"));
  }

  modifierArticle()
  {
    this.daoService.baseUrl="http://localhost:8762/article";
      this.daoService.ajouterObjet(this.article)
        .subscribe(data => {
          this.reloadData();
        }, error => 
        {
          console.log("Modification d'article échoué")
          this.reloadData();
        });
        

  }


  initOdp(odp:Odp)
  {
    this.odp=Object.assign({}, odp);;
  }

  initArticle(article:Article)
  {
    this.article=Object.assign({}, article);;
  }

  

  modifierEtat()
  {
      this.daoService.ajouterObjet(this.odp)
        .subscribe(data => {
          this.odps=this.daoService.getListeObjets();
        }, error => console.log("Modification du odp échoué"));
  }

  estExistant(odp:Odp)
  {
    if(odp.article.nbFile==0&&!odp.article.projet&&!odp.article.type)
      return "p-3 mb-2 bg-danger text-white";
    return "p-3 mb-2 bg-white text-dark";
  }



  supprimerOdp(id: number) {

    if (confirm("Voulez vous vraiment supprimer ce ODP")) {
      {
        this.daoService.supprimerObjet(id)
        .subscribe(
          data => {    this.reloadData();;

          },
          error => console.log("Suppression du odp échoué"));
          this.reloadData();
      }
    } 
  }
  



  
  supprimerOdps() {

    if (confirm("Voulez vous vraiment supprimer ces ODPs")) {
      {
        for(let i=0;i<this.ids.length;i++)
        {
        this.daoService.supprimerObjet(this.ids[i])
        .subscribe(
          data => {    this.reloadData();;

          },
          error => console.log("Suppression du odp échoué"));
          this.reloadData();
        }
      }
    } 
  }

  onCheckboxChange(e,id) {
  
  
    if (e.target.checked) {
      this.ids.push(id);
    } else {
      this.ids=this.ids.filter(function(el) { return el != id; });
    }

    this.visible=this.ids.length>0;
  }


  getEtat(taches,phases)
  {
    var array = new Set();
    var manquant =false;
    if(taches.length==0)
      return "https://icons.getbootstrap.com/icons/hourglass.svg";

      for(let i=0;i<taches.length;i++)
        if(taches[i].dateFin!=" ")
        {
          array.add(taches[i].activite.id);
          if(taches[i].dateFin.includes("MQ"))
            manquant=true;
        }
      if(array.size==phases.length)
        if(manquant)
          return "https://icons.getbootstrap.com/icons/x-circle.svg";
        else
          return "https://icons.getbootstrap.com/icons/check2.svg";
      else
        return "https://icons.getbootstrap.com/icons/gear.svg";
  }

  verif3(taches,id)
  {
    var obj = {width:"0%",class:"progress-bar bg-info"};
    var manquant=false;
    for(let i=taches.length-1;i>=0;i--)
      if(taches[i].activite.phase.id==id)
        if(taches[i].dateFin==" ")
          obj= {width:"50%",class:"progress-bar bg-info"}
        else
          if(taches[i].dateFin.includes("MQ"))
            manquant=true;
          else
        obj= {width:"100%",class:"progress-bar bg-success"} 
        if(manquant)
          obj= {width:"100%",class:"progress-bar bg-danger"} 
      return obj;
  }


  onCheckboxChange2(e,phase:Phase) {
  
  
    if (e.target.checked) {
      this.article.phases.push(phase);
    } else {
      this.article.phases=this.article.phases.filter(function(el) { return el.id != phase.id; });
    }
  }
}
