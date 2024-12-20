import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { RechercherParTypeComponent } from './rechercher-par-type/rechercher-par-type.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { LoginComponent } from './login/login.component';
import { evenementGuard } from './evenement.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';




const routes: Routes = [
  {path: "evenements", component : EvenementsComponent},
  {path: "add-evenement", component : AddEvenementComponent/* , canActivate:[evenementGuard]*/},
  {path: "rechercheParType", component : RechercherParTypeComponent},
  {path: "rechercheParNom", component : RechercherParNomComponent},
  {path: "listTypes", component : ListeTypesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'updateEvenement/:id', component: UpdateEvenementComponent},
  {path:'register',component:RegisterComponent},
  { path: 'verifEmail', component: VerifEmailComponent },

  
 
  { path: "", redirectTo: "evenements", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [evenementGuard]
})
export class AppRoutingModule { }
