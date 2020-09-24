import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from "./produit/produit.component";
import { OdpComponent } from './odp/odp.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'produit/:id', component: ProduitComponent},
  { path: 'utilisateur', component: UtilisateurComponent},
  { path: 'login', component: LoginComponent},
  { path: 'odp', component: OdpComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
