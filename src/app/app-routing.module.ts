import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lista',
  },
  {
    path: 'lista',
    loadChildren :() => import('./modules/lista/lista.module').then((m) => m.ListaModule)
  },
  {
    path:'lista/:isocode/:country',
    loadChildren : () => import('./modules/detalhe/detalhe.module').then((m ) => m.DetalheModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
