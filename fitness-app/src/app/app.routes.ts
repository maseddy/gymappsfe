import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MemberManagementComponent } from './pages/member-management/member-management.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'members', component: MemberManagementComponent }
];
