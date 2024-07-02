import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './modules/shared/componentes/navbar/navbar.component';
import { InicioComponent } from './modules/inicio/page/inicio/inicio.component';

const routes: Routes = [
{path:"", component: InicioComponent },
{
  path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
},
{
  path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
},
{
  path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }