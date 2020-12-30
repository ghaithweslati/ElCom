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
import { ChartsModule} from 'ng2-charts';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { PhaseComponent } from './phase/phase.component';
import { ActiviteComponent } from './activite/activite.component';
import { OdpsComponent } from './odps/odps.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleSupprimerComponent } from './article-supprimer/article-supprimer.component';
import { PresenceComponent } from './presence/presence.component';
import { CommencerComponent } from './commencer/commencer.component';
import { TerminerComponent } from './terminer/terminer.component';
import { OperatriceComponent } from './operatrice/operatrice.component';
import { PosteComponent } from './poste/poste.component';
import { StatistiquePresenceComponent } from './statistique-presence/statistique-presence.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    OdpComponent,
    UtilisateurComponent,
    LoginComponent,
    ArticleComponent,
    PhaseComponent,
    ActiviteComponent,
    OdpsComponent,
    DashboardComponent,
    ArticlesComponent,
    ArticleSupprimerComponent,
    PresenceComponent,
    CommencerComponent,
    TerminerComponent,
    OperatriceComponent,
    PosteComponent,
    StatistiquePresenceComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutocompleteLibModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
