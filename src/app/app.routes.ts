import { Routes } from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full',
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
