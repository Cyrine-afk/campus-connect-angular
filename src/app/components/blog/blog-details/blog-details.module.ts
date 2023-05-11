import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './blog-details.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    BlogDetailsComponent
    
  ],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule,
    FormsModule,
    FeatherIconModule
  ]
})
export class BlogDetailsModule { }
