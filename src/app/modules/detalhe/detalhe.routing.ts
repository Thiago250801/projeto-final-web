import { Routes, RouterModule} from "@angular/router";
import { DetalheComponent} from "./detalhe.component";

const routes: Routes = [
  {
    path: '',
    component: DetalheComponent
  }

]
export const DetlheRoutes = RouterModule.forChild(routes);
