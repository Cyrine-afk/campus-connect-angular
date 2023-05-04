import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';

const routes: Routes = [
  {
    path: "fournisseur-list", //name of component folder
    component: FournisseurListComponent //name of component itself
  }, 
  {
    path: "add-fournisseur",
    component: AddFournisseurComponent
  },
  {
    path: 'edit-fournisseur/:idFourn', //the /:id is a dynamic id parameter
    component: EditFournisseurComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
