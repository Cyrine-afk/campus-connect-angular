import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProjetComponent } from './add-projet.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';
import { AddProjetsRoutingModule } from './add-projet-routing.module';

@NgModule({
  declarations: [
    AddProjetComponent
  ],
  imports: [
    CommonModule,
    AddProjetsRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AddProjetModule { }