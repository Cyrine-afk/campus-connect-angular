import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FraisInscriptionComponent } from './frais-inscription.component';



const routes: Routes = [
    {
        path : '' , component : FraisInscriptionComponent ,
        children: [
            {
              path: 'add-frais-inscription',
              loadChildren: () =>
                import('./add-frais-inscription/add-frais-inscription.module').then(
                  (m) => m.AddFraisInscriptionModule
                ),
            },
            {
              path: 'list-frais-inscription',
              loadChildren: () =>
                import('./list-frais-inscription/list-frais-inscription.module').then(
                  (m) => m.ListFraisInscriptionModule
                ),
            },
            {
              path: 'edit-frais-inscription/:id',
              loadChildren: () =>
                import('./edit-frais-inscription/edit-frais-inscription.module').then(
                  (m) => m.EditFraisInscriptionModule
                ),
            },
          ]
     }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FraisInscriptionRoutingModule {}