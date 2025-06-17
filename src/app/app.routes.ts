
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login)
  },
  {
   path: 'dashboard',
   loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
 },
{
   path: 'project-detail/:id',
   loadComponent: () => import('./project-detail/project-detail').then(m => m.ProjectDetail)
 },

  {
    path: '**',
    redirectTo: ''
  }
];

