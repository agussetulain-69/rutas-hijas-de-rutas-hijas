import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';

const routes : Routes = [
  {
    path: '',
    children: [
      {
        path: '**',
        component: CatalogoComponent
      },

      /* Y de esta manera seguirías agregando tus respectivos modulos con carga lazy load o perezosa
      Por ejemplo, si tuvieras más... algún otro más, lo agregarías así (más de lo anteriormente hecho)

      {
        path: 'hijo-cat',
        loadChildren: () => import('./hijo-cat/hijo-cat.module').then(m =>m.HijoCatModule)
      }
      ... etc. */
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
