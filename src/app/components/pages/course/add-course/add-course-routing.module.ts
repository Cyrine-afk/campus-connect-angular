import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course.component';
import {DashboardInstructorComponent} from "../../../instructor/dashboard-instructor/dashboard-instructor.component";
import {CommonModule} from "@angular/common";
import {
  DashboardInstructorRoutingModule
} from "../../../instructor/dashboard-instructor/dashboard-instructor-routing.module";

const routes: Routes = [{ path: '', component: AddCourseComponent }];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCourseRoutingModule { }
