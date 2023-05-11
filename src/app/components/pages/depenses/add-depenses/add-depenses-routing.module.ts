import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepensesComponent } from './add-depenses.component';

const routes: Routes = [{ path: '', component: AddDepensesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDepensesRoutingModule { }