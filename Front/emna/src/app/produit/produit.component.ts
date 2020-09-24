import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.sass']
})
export class ProduitComponent implements OnInit {

  produits: Observable<Produit[]>;
  produit: Produit = new Produit();
  updatedProduits:Produit[]=[];
  id_odp=this.router.snapshot.paramMap.get('id');
  action="Ajouter un produit";
  action2="Modifier les periorites";
  affiche=false;
  est_plan_log=JSON.parse(localStorage.getItem('user')).poste=="Plan-Log";
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.daoService.baseUrl+="produit";
    this.reloadData();
  }

  reloadData() {
    this.produits = this.daoService.getListeObjets();
  }


  ajouterProduit() {

    if(this.action=="Ajouter un produit")
    {
      this.produit.odp.id=Number(this.id_odp);
      this.daoService.ajouterObjet(this.produit)
        .subscribe(data => {
          this.reloadData();
          this.produit = new Produit();
        }, error => alert("Ajout du produit échoué"));

      }
    else
    {
      this.daoService.ajouterObjet(this.produit)
      .subscribe(data => {
        this.reloadData();
        this.action="Ajouter un produit";
        this.produit = new Produit();
      }, error => alert("Modification du produit échoué"));
    }
  }

  initProduit(prod:Produit)
  {
    this.produit=Object.assign({}, prod);
    this.action="Modifier le produit";
  }


  modifierProduits()
  {
    if(this.action2=='Modifier les periorites')
    {
      this.affiche=true;
      this.action2="Enregistrer";
    }
    else
    {
      this.produits.subscribe(data=>{
        for(let i=0;i<this.updatedProduits.length;i++)
          {
          this.produit=this.updatedProduits[i];
          this.ajouterProduit();
          this.action2='Modifier les periorites';
          this.affiche=false;
          }  
                
     })

    }


  }
 


  supprimerProduit(id: number) {

    if (confirm("Voulez vous vraiment supprimer ce produit")) {
      {
        this.daoService.supprimerObjet(id)
        .subscribe(
          data => {this.reloadData();
          },
          error => alert("Suppression du produit échoué"));
          this.reloadData();
      }
    } 

  }

  changed(prod:Produit)
  {
    prod.periorite=!prod.periorite;
    this.updatedProduits.push(prod);
  }

  getPeriotitaire(condition:boolean)
  {
    if(condition)
      return "Oui";
    else
      return "Non";
  }


}
