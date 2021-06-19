import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OglavlenieComponent } from '../oglavlenie.component';



@NgModule({
  declarations: [OglavlenieComponent],
  exports: [OglavlenieComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class OglavModule { }
