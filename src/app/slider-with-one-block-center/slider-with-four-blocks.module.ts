import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SliderWithOneBlockCenterComponent } from './slider-with-one-block-center.component';



@NgModule({
  declarations: [SliderWithOneBlockCenterComponent],
  exports: [SliderWithOneBlockCenterComponent],
  imports: [
    CommonModule
  ]
})
export class SliderWithOneBlockCenterModule { }
