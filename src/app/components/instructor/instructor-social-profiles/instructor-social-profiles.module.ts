import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorSocialProfilesRoutingModule } from './instructor-social-profiles-routing.module';
import { AddFournisseurComponent } from './add-fournisseur.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    InstructorSocialProfilesRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorSocialProfilesModule { }
