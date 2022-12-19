import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxSoapModule} from "ngx-soap";
import {HttpClientModule} from "@angular/common/http";
import {ListaModule} from "./modules/lista/lista.module";
import {DetalheModule} from "./modules/detalhe/detalhe.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSoapModule,
    ListaModule,
    DetalheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
