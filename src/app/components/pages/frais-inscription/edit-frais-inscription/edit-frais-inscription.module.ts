import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditFraisInscriptionComponent } from './edit-frais-inscription.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';
import { EditFraisInscriptionRoutingModule } from './edit-frais-inscription-routing.module';

@NgModule({
  declarations: [
    EditFraisInscriptionComponent
  ],
  imports: [
    CommonModule,
    EditFraisInscriptionRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EditFraisInscriptionModule { }