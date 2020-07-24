import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROOT_PATHS } from '../paths';
import { DefaultLayout } from './layouts';
import { AboutRoute, HomeRoute } from './routes';

export const routes: Routes = [
  {
    path: ROOT_PATHS.Home,
    component: DefaultLayout,
    children: [{ path: '', component: HomeRoute }]
  },
  {
    path: ROOT_PATHS.About,
    component: DefaultLayout,
    children: [{ path: '', component: AboutRoute }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutesModule {}
