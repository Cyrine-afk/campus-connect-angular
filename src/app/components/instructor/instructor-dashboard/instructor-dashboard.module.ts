import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorDashboardRoutingModule } from './instructor-dashboard-routing.module';
import { FournisseurListComponent } from './fournisseur-list.component';

import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    InstructorDashboardRoutingModule,
    FeatherIconModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [FournisseurListComponent]
})
export class InstructorDashboardModule { }
