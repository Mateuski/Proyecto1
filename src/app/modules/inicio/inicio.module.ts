import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// VISTAS - PÁGINAS
import { InicioComponent } from './page/inicio/inicio.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

// COMPONENTES DE MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }