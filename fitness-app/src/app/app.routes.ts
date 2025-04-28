import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardContentComponent } from './pages/dashboard-content/dashboard-content.component';
import { MemberManagementComponent } from './pages/member-management/member-management.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardContentComponent },
      { path: 'members', component: MemberManagementComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];
