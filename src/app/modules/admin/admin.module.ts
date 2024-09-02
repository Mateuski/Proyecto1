import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Archivo de rutas del módulo
import { AdminRoutingModule } from './admin-routing.module';

// Vista
import { AdminComponent } from './pages/admin/admin.component';

import { Tablecomponent } from './components/table/table.component';

// Paqueterías para formularios y formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes de material
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminComponent,
    Tablecomponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[
    AdminComponent,
    Tablecomponent,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class AdminModule { }
