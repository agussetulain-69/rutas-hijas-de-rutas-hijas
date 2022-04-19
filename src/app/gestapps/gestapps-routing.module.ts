import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';

const routes : Routes =[
  {
    path: '',
    children: [
      // path vacío así cuando viene http://localhost:4200/gestapps me lo debería abrir, pero no lo hace
      {
        path: '',
        component: StartComponent
      },
      {
        path: 'meat',
        loadChildren: () => import('../gestapps/meat/meat.module').then(m =>m.MeatModule)
      },
      // Si tuviese los portales que vos tenías, irían de la misma manera

      // {
      //   path: 'fish',
      //   loadChildren: () => import('../gestapps/fish/fish.module').then(m =>m.FishModule)
      // },
      // {
      //   path: 'fruit',
      //   loadChildren: () => import('../gestapps/fruit/fruit.module').then(m =>m.FruitModule)
      // },

      // En mi caso los borré porque realmente no los ocupaba ya que detalle de estos ↑ no había en tu comentario (de UDEMY)
      {
        path: '**',
        redirectTo: ''
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestappsRoutingModule { }
