import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FinanceComponent } from './finance/finance.component';




@NgModule({
  declarations: [
    PagesComponent,
    FinanceComponent,
 
  
  
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
