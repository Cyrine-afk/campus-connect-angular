import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDepensesComponent } from './edit-depenses.component';

const routes: Routes = [{ path: ':id', component: EditDepensesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDepensesRoutingModule { }