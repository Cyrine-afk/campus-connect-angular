import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plat } from 'src/app/models/plat';
import { PlatService } from 'src/app/services/Restaurant/plat.service';
import { InstructorCourseRoutingModule } from './instructor-course-routing.module';
import { InstructorCourseComponent } from './instructor-course.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { DashboardInstructorRoutingModule } from '../dashboard-instructor/dashboard-instructor-routing.module';
import { DashboardInstructorComponent } from '../dashboard-instructor/dashboard-instructor.component';



@NgModule({
  declarations: [
    InstructorCourseComponent
  ],
  imports: [
    CommonModule,
    InstructorCourseRoutingModule,
    FeatherIconModule,
    SharedModule,   DashboardInstructorRoutingModule

  ],
})
export class InstructorCourseModule { }
