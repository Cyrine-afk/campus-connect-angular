import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProjetComponent } from './edit-projet.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';
import { EditProjetsRoutingModule } from './edit-projet-routing.module';

@NgModule({
  declarations: [
    EditProjetComponent
  ],
  imports: [
    CommonModule,
    EditProjetsRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EditProjetModule { }