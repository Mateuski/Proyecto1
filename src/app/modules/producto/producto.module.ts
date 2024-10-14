import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { DlcComponent } from './pages/dlc/dlc.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CardComponent } from './components/card/card.component';
import { CardJuegosComponent } from './components/card-dlc/card-dlc.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { CardsofertasComponent } from './components/cardsofertas/cardsofertas.component';

@NgModule({
  declarations: [
    DlcComponent,
    SoporteComponent,
    ProductoComponent,
    CardComponent,
    CardJuegosComponent,
    OfertasComponent,
    CardsofertasComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    CardJuegosComponent,
    CardComponent,
    DlcComponent,
    SoporteComponent,
    OfertasComponent,
    CardsofertasComponent
  ]
})
export class ProductoModule { }
