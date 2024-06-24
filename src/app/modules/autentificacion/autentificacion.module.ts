import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { IniciosesionComponent } from '../inicio/components/page/iniciosesion/iniciosesion.component';
import { RegistroComponent } from '../inicio/components/page/registro/registro.component';


@NgModule({
  declarations: [
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ]
})
export class AutentificacionModule { }
