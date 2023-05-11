import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProjetComponent } from './list-projet.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';
import { ListProjetsRoutingModule } from './list-projet-routing.module';

@NgModule({
  declarations: [
    ListProjetComponent
  ],
  imports: [
    CommonModule,
    ListProjetsRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ListProjetModule { }