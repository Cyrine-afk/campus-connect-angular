import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';

const routes: Routes = [
  {
    path: "fournisseur-list", //name of component folder
    component: FournisseurListComponent //name of component itself
  }, 
  {
    path: "add-fournisseur",
    component: AddFournisseurComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
