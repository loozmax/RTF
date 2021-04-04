import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayRadioComponent } from './day-radio/day-radio.component';
import { DayModule } from './day-radio/day/day.module';
import { OglavModule } from './oglavlenie/oglav/oglav.module';
import { Slider3Module } from './slider3/slider3/slider3.module';
import { Slider4Module } from './slider4/slider4/slider4.module';
import { Slider5Module } from './slider5/slider5/slider5.module';
import { Slider6Module } from './slider6/slider6/slider6.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DayModule,
    OglavModule,
    Slider3Module,
    Slider4Module,
    Slider5Module,
    Slider6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
