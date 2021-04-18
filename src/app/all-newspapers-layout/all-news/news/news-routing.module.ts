import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from 'src/app/wrapper/wrapper.component';
import { AllNewspapersLayoutComponent } from '../../all-newspapers-layout.component';

const routes: Routes = [ 
  {
    path: 'main', 
    component: AllNewspapersLayoutComponent,
    children: [
      {path: 'newspaper/:id', redirectTo: '/main/newspaper/:id'}
    ] 
  },
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
