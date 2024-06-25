import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enviroment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './modules/inicio/components/components.component';
import { PageComponent } from './modules/inicio/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
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
