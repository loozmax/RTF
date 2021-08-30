import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WithArrowToBottomComponent } from './with-arrow-to-bottom.component';



@NgModule({
  declarations: [WithArrowToBottomComponent],
  exports: [WithArrowToBottomComponent],
  imports: [
    CommonModule
  ]
})
export class WithArrowToBottomModule { }
