import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurListComponent } from './fournisseur-list.component';

const routes: Routes = [{ path: '', component: FournisseurListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorDashboardRoutingModule { }
