import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { DlcComponent } from './pages/dlc/dlc.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CardComponent } from './components/card/card.component';
import { CardJuegosComponent } from './components/card-dlc/card-dlc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DlcComponent,
    SoporteComponent,
    ProductoComponent,
    CardComponent,
    CardJuegosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductoComponent,
    CardJuegosComponent,
    CardComponent,
    DlcComponent,
    SoporteComponent
  ]
})
export class ProductoModule { }
