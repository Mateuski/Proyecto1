import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { DlcComponent } from './pages/dlc/dlc.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CardComponent } from './components/card/card.component';
import { CardJuegosComponent } from './components/card-juegos/card-juegos.component';

@NgModule({
  declarations: [
    
  
    DlcComponent,
            JuegosComponent,
            SoporteComponent,
            ProductoComponent,
            CardComponent,
            CardJuegosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    CardJuegosComponent,
    CardComponent,
    JuegosComponent,
    DlcComponent,
    SoporteComponent
  ]
})
export class ProductoModule { }
