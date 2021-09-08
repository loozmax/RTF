import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slider3Component } from '../slider3.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [Slider3Component],
  exports: [Slider3Component],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ]
})
export class Slider3Module { }
