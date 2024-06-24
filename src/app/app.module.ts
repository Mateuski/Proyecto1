import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentesComponent } from './componentes/componentes.component';
import { CardComponent } from './components/card/card.component';
import { ComponentsComponent } from './modules/inicio/components/components.component';
import { PageComponent } from './modules/inicio/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    CardComponent,
    ComponentsComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
