import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/admin-guard/admin.guard';
import { AdminPanelComponent } from 'src/app/admin-panel/admin-panel.component';
import { CreateNewReleaseComponent } from 'src/app/create-new-release/create-new-release.component';
import { AllNewspapersLayoutComponent } from '../../all-newspapers-layout.component';
import { NewsRoutingModule } from './news-routing.module';



@NgModule({
  declarations: [
    AllNewspapersLayoutComponent,
    AdminPanelComponent,
    CreateNewReleaseComponent,
  ],
  exports: [
    AllNewspapersLayoutComponent, 
    AdminPanelComponent,
    CreateNewReleaseComponent
  ],
  providers: [AdminGuard],
  imports: [
    CommonModule,
    RouterModule,
    NewsRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewsModule { }
