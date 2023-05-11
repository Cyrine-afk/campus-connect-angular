import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepensesComponent } from './depenses.component';


const routes: Routes = [
    {
        path : '' , component : DepensesComponent ,
        children: [
            {
              path: 'add-depense',
              loadChildren: () =>
                import('./add-depenses/add-depenses.module').then(
                  (m) => m.AddDepensesModule
                ),
            },
            {
              path: 'list-depense',
              loadChildren: () =>
                import('./list-depenses/list-depenses.module').then(
                  (m) => m.ListDepensesModule
                ),
            },
            {
              path: 'edit-depense',
              loadChildren: () =>
                import('./edit-depenses/edit-depenses.module').then(
                  (m) => m.EditDepensesModule
                ),
            },
          ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepensesRoutingModule {}