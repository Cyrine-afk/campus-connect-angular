import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFournisseurComponent } from './edit-fournisseur.component';

const routes: Routes = [{ path: '', component: EditFournisseurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorPayoutsRoutingModule { }
