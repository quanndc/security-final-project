import { Routes } from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.routes').then((r) => r.LOGIN_ROUTES),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./pages/student/student.routes').then((r) => r.STUDENT_ROUTES),
  },
  {
    path: 'mark',
    loadChildren: () =>
      import('./pages/mark/mark.routes').then((r) => r.MARK_ROUTES),
  },
  {
    path: 'class',
    loadChildren: () =>
      import('./pages/class/class.routes').then((r) => r.CLASS_ROUTES),
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];
