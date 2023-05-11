import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFraisInscriptionComponent } from './list-frais-inscription.component';

const routes: Routes = [{ path: '', component: ListFraisInscriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFraisInscriptionRoutingModule { }