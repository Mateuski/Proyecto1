import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODAS LAS VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { DlcComponent } from './pages/dlc/dlc.component';
import { SoporteComponent } from './pages/soporte/soporte.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent,

  },
  {
    path:"dlc",component:DlcComponent,

  },
  {
    path:"soporte",component:SoporteComponent,
    
  },
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
