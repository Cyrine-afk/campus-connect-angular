import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProjetsComponent } from './projets.component';
import { ProjetsRoutingModule } from './projets-routing.module';



@NgModule({
  declarations: [
    ProjetsComponent,
    
  ],
  imports: [
    CommonModule,
    ProjetsRoutingModule
  ]
})
export class ProjetsModule { }