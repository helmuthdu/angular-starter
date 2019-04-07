import { Routes } from '@angular/router';
import { HomeRoute } from './home/home.route';

export const rootRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeRoute
  }
];
