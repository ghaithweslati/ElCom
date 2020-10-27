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
  { path: 'odp', component: OdpComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
