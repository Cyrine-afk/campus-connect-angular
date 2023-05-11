import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFraisInscriptionComponent } from './edit-frais-inscription.component';

const routes: Routes = [{ path: '', component: EditFraisInscriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditFraisInscriptionRoutingModule { }