import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNgoComponent} from "./add-ngo.component";

const routes: Routes = [{ path: '', component: AddNgoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorOrdersRoutingModule { }
