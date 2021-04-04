import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OglavlenieComponent } from '../oglavlenie.component';



@NgModule({
  declarations: [OglavlenieComponent],
  exports: [OglavlenieComponent],
  imports: [
    CommonModule
  ]
})
export class OglavModule { }
