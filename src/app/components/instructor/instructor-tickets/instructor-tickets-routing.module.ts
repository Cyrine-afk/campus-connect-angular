import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgoListComponent } from "./ngo-list.component";

const routes: Routes = [{ path: '', component: NgoListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorTicketsRoutingModule { }
