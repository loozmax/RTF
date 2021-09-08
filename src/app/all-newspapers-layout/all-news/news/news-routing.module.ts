import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/admin-guard/admin.guard';
import { AdminPanelComponent } from 'src/app/admin-panel/admin-panel.component';
import { AllNewspapersLayoutComponent } from '../../all-newspapers-layout.component';

const routes: Routes = [
  {
    path: 'main',
    component: AllNewspapersLayoutComponent,
    children: [
      { path: 'newspaper/:id', redirectTo: '/main/newspaper/:id' },
    ]
  },
  { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main', pathMatch: 'full' },

  /** Заглушка. Тестовый выпуск */
  // { path: 'test', component: TestComponentForShadrinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
