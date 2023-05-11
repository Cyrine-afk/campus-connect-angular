import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EditDepensesComponent } from './edit-depenses.component';
import { EditDepensesRoutingModule } from './edit-depenses-routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    EditDepensesComponent
  ],
  imports: [
    CommonModule,
    EditDepensesRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EditDepensesModule { }