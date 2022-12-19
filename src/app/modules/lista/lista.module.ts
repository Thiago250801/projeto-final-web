import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaComponent} from "./lista.component";
import {ListaRoutes} from "./lista.routing";

@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    ListaRoutes,
  ]
})
export class ListaModule { }
