import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OdpComponent } from './odp/odp.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    OdpComponent,
    UtilisateurComponent,
    LoginComponent,
    ArticleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
