import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/admin-guard/admin.guard';
import { AdminPanelComponent } from 'src/app/admin-panel/admin-panel.component';
import { CreateNewReleaseComponent } from 'src/app/create-new-release/create-new-release.component';
import { RedoReleaseComponent } from 'src/app/redo-release/redo-release.component';
import { AllNewspapersLayoutComponent } from '../../all-newspapers-layout.component';
import { NewsRoutingModule } from './news-routing.module';


@NgModule({
  declarations: [
    AllNewspapersLayoutComponent,
    AdminPanelComponent,
    CreateNewReleaseComponent,
    RedoReleaseComponent,

  ],
  exports: [
    AllNewspapersLayoutComponent, 
    AdminPanelComponent,
    CreateNewReleaseComponent,
  ],
  providers: [AdminGuard],
  imports: [
    CommonModule,
    RouterModule,
    NewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule
  ]
})
export class NewsModule { }
