import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './dashboard-two/dashboard-two.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'app-dashboard-one', component: DashboardOneComponent },
      { path: 'app-dashboard-two', component: DashboardTwoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
