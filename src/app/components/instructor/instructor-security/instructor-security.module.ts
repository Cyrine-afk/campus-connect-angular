import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorSecurityRoutingModule } from './instructor-security-routing.module';
import { NgoStatsComponent} from "./ngo-stats.component";
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    InstructorSecurityRoutingModule,
    FeatherIconModule,
    FormsModule
  ]
})
export class InstructorSecurityModule { }
