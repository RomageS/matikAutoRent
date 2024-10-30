import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Hfila1Component } from './header/hfila1/hfila1.component';
import { Hfila2Component } from './header/hfila2/hfila2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Hfila1Component,
    Hfila2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
