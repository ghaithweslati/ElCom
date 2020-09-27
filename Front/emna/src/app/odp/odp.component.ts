import { Component, OnInit } from '@angular/core';
import { Odp } from '../odp';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-odp',
  templateUrl: './odp.component.html',
  styleUrls: ['./odp.component.sass']
})
export class OdpComponent implements OnInit {
  keyword = 'name';
  val = [];
  
  odps: Observable<Odp[]>;
  odp: Odp = new Odp();
  data:[][];
  action="Ajouter";
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: Router) { }

  ngOnInit(): void {
    this.daoService.baseUrl="http://localhost:8761/article";
    this.daoService.getListeObjets().subscribe(data=>{
     for(let i=0;i<data.length;i++)
      this.val.push({"id":data[i].code,"name":data[i].code});
    })



    this.daoService.baseUrl="http://localhost:8761/odp";
    this.reloadData();

  }

  reloadData() {
    this.odps = this.daoService.getListeObjets();
  }


  charger()
  {
    for(let i=1;i<this.data.length;i++)
    {
      
      
        this.data[i].shift();this.data[i].shift();this.data[i].shift();this.data[i].shift();
        this.odp.id=this.data[i].shift();
        this.data[i].shift();
        this.odp.date=this.data[i].shift();
        this.data[i].shift();this.data[i].shift();
        this.odp.article.code=this.data[i].shift();
        this.odp.description=this.data[i].shift();
        this.data[i].shift();this.data[i].shift();
        this.odp.quantite=this.data[i].shift();
        this.ajouterOdp();
        
    }
    alert("chargement réussit");

  }


  ajouterOdp() {
      this.daoService.ajouterObjet(this.odp)
        .subscribe(data => {
          this.reloadData();
          this.fermer();
        }, error => console.log("Ajout du odp échoué"));
  }

  
  supprimerOdp(id: number) {

    if (confirm("Voulez vous vraiment supprimer ce ODP")) {
      {
        this.daoService.supprimerObjet(id)
        .subscribe(
          data => {this.reloadData();

          },
          error => alert("Suppression du odp échoué"));
          this.reloadData();
      }
    } 
  }

  initOdp(o:Odp)
  {

    this.odp = Object.assign({}, o);
    this.odp.article = Object.assign({}, o.article);
    this.action="Modifier";
  }


  fermer()
  {
    this.odp=new Odp();
    this.action="Ajouter";
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


  redirect(id:number)
  {
      window.location.href = 'produit/'+id;
  }

  selectEvent(item) {
    // do something with selected item
    alert(JSON.stringify(item))
  this.odp.article.code=item.name;
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
 
  }

  
}

