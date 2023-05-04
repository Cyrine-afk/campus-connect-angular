import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { FournisseurService } from './services/fournisseur/fournisseur.service';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { FormsModule } from '@angular/forms';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import { FournisseurFilterPipePipe } from './fournisseur-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurListComponent,
    AddFournisseurComponent,
    EditFournisseurComponent,
    FournisseurFilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FournisseurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
