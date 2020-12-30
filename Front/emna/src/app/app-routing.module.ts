import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from "./produit/produit.component";
import { OdpComponent } from './odp/odp.component';
import { OdpsComponent } from './odps/odps.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { PhaseComponent } from './phase/phase.component';
import { ActiviteComponent } from './activite/activite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleSupprimerComponent } from './article-supprimer/article-supprimer.component';
import { PresenceComponent } from './presence/presence.component';
import { CommencerComponent } from './commencer/commencer.component';
import { TerminerComponent } from './terminer/terminer.component';
import { OperatriceComponent } from './operatrice/operatrice.component';
import { PosteComponent } from './poste/poste.component';
import {  StatistiquePresenceComponent } from './statistique-presence/statistique-presence.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'produit/:id', component: ProduitComponent},
  { path: 'utilisateur', component: UtilisateurComponent},
  { path: 'login', component: LoginComponent},
  { path: 'article', component: ArticleComponent},
  { path: 'article/supprimer', component: ArticleSupprimerComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'phase', component: PhaseComponent},
  { path: 'activite', component: ActiviteComponent},
  { path: 'odps', component: OdpsComponent},
  { path: 'odp', component: OdpComponent},
  { path: 'operatrice', component: OperatriceComponent},
  { path: 'commencer', component: CommencerComponent},
  { path: 'terminer', component: TerminerComponent},
  { path: 'poste', component: PosteComponent},
  { path: 'presence', component: PresenceComponent} ,
  { path: 'statistique/presence', component: StatistiquePresenceComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
