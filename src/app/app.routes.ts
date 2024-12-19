import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'login',
    loadComponent: () => {
      return import('./login/login.component').then((m) => m.LoginComponent);
    },
  },
  {
    path: 'register',
    loadComponent: () => {
      return import('./register/register.component').then(
        (m) => m.RegisterComponent
      );
    },
  },
];
