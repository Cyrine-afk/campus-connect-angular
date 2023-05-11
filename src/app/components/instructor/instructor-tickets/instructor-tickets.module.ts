import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorTicketsRoutingModule } from './instructor-tickets-routing.module';
import { NgoListComponent} from "./ngo-list.component";
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    InstructorTicketsRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorTicketsModule { }
