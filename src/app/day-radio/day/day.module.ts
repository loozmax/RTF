import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayRadioComponent } from '../day-radio.component';



@NgModule({
  declarations: [DayRadioComponent],
  exports: [DayRadioComponent],
  imports: [
    CommonModule
  ]
})
export class DayModule { }
