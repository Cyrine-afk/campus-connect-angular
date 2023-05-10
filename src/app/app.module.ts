import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/module/shared.module';
import { FournisseurFilterPipePipe } from './fournisseur-filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { FournisseurListComponent } from './components/instructor/instructor-dashboard/fournisseur-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddFournisseurComponent } from './components/instructor/instructor-social-profiles/add-fournisseur.component';
import { EditFournisseurComponent } from './components/instructor/instructor-payouts/edit-fournisseur.component';

@NgModule({
  declarations: [AppComponent,
    FournisseurListComponent,
    FournisseurFilterPipePipe,
    AddFournisseurComponent,
    EditFournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
