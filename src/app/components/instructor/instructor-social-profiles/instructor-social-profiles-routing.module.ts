import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFournisseurComponent } from './add-fournisseur.component';

const routes: Routes = [{ path: '', component: AddFournisseurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorSocialProfilesRoutingModule { }
