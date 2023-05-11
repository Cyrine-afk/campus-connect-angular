import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjetComponent } from './edit-projet.component';

const routes: Routes = [{ path: '', component: EditProjetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProjetsRoutingModule { }