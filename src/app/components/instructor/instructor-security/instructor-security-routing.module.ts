import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgoStatsComponent} from "./ngo-stats.component";

const routes: Routes = [{ path: '', component: NgoStatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorSecurityRoutingModule { }
