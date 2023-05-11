import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFraisInscriptionComponent } from './add-frais-inscription.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';
import { AddFraisInscriptionRoutingModule } from './add-frais-inscription-routin.module';

@NgModule({
  declarations: [
    AddFraisInscriptionComponent
  ],
  imports: [
    CommonModule,
    AddFraisInscriptionRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AddFraisInscriptionModule { }