import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  {
    path: '',
    children: [
      {
        path: 'catalogue',
        loadChildren: () => import('./pages/catalog/catalog.module').then(m =>m.CatalogModule)
      },
      {
        path: '**',
        component: HomeComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeatRoutingModule { }
