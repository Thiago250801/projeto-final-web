import { Routes, RouterModule} from "@angular/router";
import {ListaComponent} from "./lista.component";

const routes: Routes = [
  {
    path: '',
    component: ListaComponent
  }
]
export const ListaRoutes = RouterModule.forChild(routes);
