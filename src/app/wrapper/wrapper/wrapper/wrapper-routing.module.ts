import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from '../../wrapper.component';

const routes: Routes = [ {path: 'main/newspaper/:id', component: WrapperComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WrapperRoutingModule { }
