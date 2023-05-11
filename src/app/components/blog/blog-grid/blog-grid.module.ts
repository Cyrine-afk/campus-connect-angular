import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridRoutingModule } from './blog-grid-routing.module';
import { BlogGridComponent } from './blog-grid.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    BlogGridComponent
  ],
  imports: [
    CommonModule,
    BlogGridRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogGridModule { }
