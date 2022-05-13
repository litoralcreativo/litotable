import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { LitotableModule } from './litotable/litotable.module';
import { FormularioCreacionComponent } from './componentes/formulario-creacion/formulario-creacion.component';

@NgModule({
  declarations: [AppComponent, FormularioCreacionComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LitotableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
