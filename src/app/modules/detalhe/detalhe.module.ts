import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetalheComponent} from "./detalhe.component";
import {DetlheRoutes} from "./detalhe.routing";



@NgModule({
  declarations: [
    DetalheComponent
  ],
  imports: [
    CommonModule,
    DetlheRoutes,
  ]
})
export class DetalheModule { }
