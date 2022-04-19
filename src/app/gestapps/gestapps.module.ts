import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { GestappsRoutingModule } from './gestapps-routing.module';



@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    GestappsRoutingModule
  ]
})
export class GestappsModule { }
