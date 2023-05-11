import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorOrdersRoutingModule } from './instructor-orders-routing.module';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    InstructorOrdersRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorOrdersModule { }
