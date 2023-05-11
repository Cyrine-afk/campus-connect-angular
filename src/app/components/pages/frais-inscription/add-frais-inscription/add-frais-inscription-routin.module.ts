import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFraisInscriptionComponent } from './add-frais-inscription.component';

const routes: Routes = [{ path: '', component: AddFraisInscriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFraisInscriptionRoutingModule { }