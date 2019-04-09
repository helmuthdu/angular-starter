import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROOT_ROUTES } from './enums/routes.enum';
import { DefaultLayout } from './layouts/default/default.layout';
import { AboutRoute } from './routes/about/about.route';
import { HomeRoute } from './routes/home/home.route';

export const routes: Routes = [
  {
    path: ROOT_ROUTES.HOME,
    component: DefaultLayout,
    children: [{ path: '', component: HomeRoute }]
  },
  {
    path: ROOT_ROUTES.ABOUT,
    component: DefaultLayout,
    children: [{ path: '', component: AboutRoute }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutes {}
