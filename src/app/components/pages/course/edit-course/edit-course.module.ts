import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';
import { EditCourseRoutingModule } from './edit-course-routing.module';
import { EditCourseComponent } from './edit-course.component';

@NgModule({
  declarations: [
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    EditCourseRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EditCourseModule { }