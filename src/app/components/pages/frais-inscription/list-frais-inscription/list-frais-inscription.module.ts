import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListFraisInscriptionComponent } from './list-frais-inscription.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';
import { ListFraisInscriptionRoutingModule } from './list-frais-inscription-routing.module';

@NgModule({
  declarations: [
    ListFraisInscriptionComponent
  ],
  imports: [
    CommonModule,
    ListFraisInscriptionRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ListFraisInscriptionModule { }