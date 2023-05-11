import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DepensesComponent } from './depenses.component';
import { DepensesRoutingModule } from './depenses-routing.module';



@NgModule({
  declarations: [
    DepensesComponent,
    

  ],
  imports: [
    CommonModule,
    DepensesRoutingModule
  ]
})
export class DepensesModule { }