import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDepensesRoutingModule } from './add-depenses-routing.module';
import { AddDepensesComponent } from './add-depenses.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    AddDepensesComponent
  ],
  imports: [
    CommonModule,
    AddDepensesRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AddDepensesModule { }