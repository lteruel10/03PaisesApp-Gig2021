import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.modulte';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisTablaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PaisModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
