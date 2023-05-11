import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorPayoutsRoutingModule } from './instructor-payouts-routing.module';
import { EditFournisseurComponent } from './edit-fournisseur.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({ 
  declarations: [
    
  ],
  imports: [
    CommonModule,
    InstructorPayoutsRoutingModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class InstructorPayoutsModule { }
