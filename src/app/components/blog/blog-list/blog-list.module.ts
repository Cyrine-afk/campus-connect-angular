import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListRoutingModule } from './blog-list-routing.module';
import { BlogListComponent } from './blog-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ToastrModule, ToastrService } from 'ngx-toastr';





@NgModule({
  declarations: [
    BlogListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BlogListRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Durée de vie de la notification
  positionClass: 'toast-top-right', // Position de la notification
  progressBar: true, // Afficher une barre de progression
  closeButton: true, // Afficher un bouton de fermeture
    })

  ],
  providers: [ ToastrService],
})
export class BlogListModule { }
