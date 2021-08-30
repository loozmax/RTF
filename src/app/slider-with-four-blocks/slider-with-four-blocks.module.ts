import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SliderWithFourBlocksComponent } from './slider-with-four-blocks.component';



@NgModule({
  declarations: [SliderWithFourBlocksComponent],
  exports: [SliderWithFourBlocksComponent],
  imports: [
    CommonModule
  ]
})
export class SliderWithFourBlocksModule { }
