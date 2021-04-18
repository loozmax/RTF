import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { AllNewspapersLayoutComponent } from '../../all-newspapers-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AllNewspapersLayoutComponent],
  exports: [AllNewspapersLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
