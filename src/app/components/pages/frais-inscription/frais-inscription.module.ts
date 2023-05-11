import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { FraisInscriptionComponent } from './frais-inscription.component';
import { FraisInscriptionRoutingModule } from './frais-inscription-routing.module';



@NgModule({
  declarations: [
    FraisInscriptionComponent,
   
    
  ],
  imports: [
    CommonModule,
    FraisInscriptionRoutingModule
  ]
})
export class FraisInscriptionModule { }