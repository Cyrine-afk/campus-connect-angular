import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseGridRoutingModule } from './course-grid-routing.module';
import { CourseGridComponent } from './course-grid.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "../../../../auth/auth.interceptor";


@NgModule({
  declarations: [
    CourseGridComponent
  ],
  imports: [
    CommonModule,
    CourseGridRoutingModule,
    FeatherIconModule,
    SharedModule,HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CourseGridModule { }
