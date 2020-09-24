import { Component, OnInit } from '@angular/core';
import { Odp } from '../odp';
import { Observable } from "rxjs";
import { DaoService } from "../dao.service";
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-odp',
  templateUrl: './odp.component.html',
  styleUrls: ['./odp.component.sass']
})
export class OdpComponent implements OnInit {

  
  odps: Observable<Odp[]>;
  odp: Odp = new Odp();
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: Router) { }

  ngOnInit(): void {
    this.daoService.baseUrl+="odp";
    this.reloadData();
  }

  reloadData() {
    this.odps = this.daoService.getListeObjets();
  }



  ajouterOdp() {
      this.odp.date=new Date().toISOString().slice(0, 19).replace('T', ' ');
      this.daoService.ajouterObjet(this.odp)
        .subscribe(data => {
          this.reloadData();
          this.odp = new Odp();
        }, error => alert("Ajout du odp échoué"));
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

  redirect(id:number)
  {
      window.location.href = 'produit/'+id;
  }
  
}
