import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { FournisseurService } from './services/fournisseur/fournisseur.service';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurListComponent,
    AddFournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FournisseurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
