import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SliderWithThreeCenterBlocksComponent } from './slider-with-three-center-blocks.component';



@NgModule({
  declarations: [SliderWithThreeCenterBlocksComponent],
  exports: [SliderWithThreeCenterBlocksComponent],
  imports: [
    CommonModule
  ]
})
export class SliderWithThreeCenterBlocksModule { }
