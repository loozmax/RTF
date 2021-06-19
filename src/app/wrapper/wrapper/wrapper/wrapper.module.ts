import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DayModule } from 'src/app/day-radio/day/day.module';
import { HeaderComponent } from 'src/app/header/header.component';
import { OglavModule } from 'src/app/oglavlenie/oglav/oglav.module';
import { Slider10Module } from 'src/app/slider10/slider10/slider10.module';
import { Slider3Module } from 'src/app/slider3/slider3/slider3.module';
import { Slider4Module } from 'src/app/slider4/slider4/slider4.module';
import { Slider5Module } from 'src/app/slider5/slider5/slider5.module';
import { Slider6Module } from 'src/app/slider6/slider6/slider6.module';
import { Slider7Module } from 'src/app/slider7/slider7/slider7.module';
import { Slider8Module } from 'src/app/slider8/slider8/slider8.module';
import { Slider9Module } from 'src/app/slider9/slider9/slider9.module';
import { WrapperComponent } from '../../wrapper.component';
import { WrapperRoutingModule } from './wrapper-routing.module';




@NgModule({
  declarations: [WrapperComponent, HeaderComponent],
  exports: [WrapperComponent, HeaderComponent],
  imports: [
    CommonModule,
    // NewsRoutingModule,
    WrapperRoutingModule,
    RouterModule,
    DayModule,
    OglavModule,
    Slider3Module,
    Slider4Module,
    Slider5Module,
    Slider6Module,
    Slider7Module,
    Slider8Module,
    Slider9Module,
    Slider10Module,
  ]
})
export class WrapperModule { }
