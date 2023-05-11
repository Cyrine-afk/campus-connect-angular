import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListDepensesComponent } from './list-depenses.component';
import { ListDepensesRoutingModule } from './list-depenses-routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    ListDepensesComponent
  ],
  imports: [
    CommonModule,
    ListDepensesRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ListDepensesModule { }