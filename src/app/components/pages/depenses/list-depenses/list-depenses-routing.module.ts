import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepensesComponent } from './list-depenses.component';

const routes: Routes = [{ path: '', component: ListDepensesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDepensesRoutingModule { }