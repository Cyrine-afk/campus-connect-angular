import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsComponent } from './projets.component';


const routes: Routes = [
    {
        path : '' , component : ProjetsComponent ,
        children: [
            {
              path: 'add-projet',
              loadChildren: () =>
                import('./add-projet/add-projet.module').then(
                  (m) => m.AddProjetModule              ),
            },
            {
              path: 'list-projet',
              loadChildren: () =>
                import('./list-projet/list-projet.module').then(
                  (m) => m.ListProjetModule              ),
            },
            {
              path: 'edit-projet/:id',
              loadChildren: () =>
                import('./edit-projet/edit-projet.module').then(
                  (m) => m.EditProjetModule              ),
            },
          ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetsRoutingModule {}