import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { ContadorModule } from './contador/contador.module';



@NgModule({
  imports:      [ BrowserModule, FormsModule, ContadorModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
