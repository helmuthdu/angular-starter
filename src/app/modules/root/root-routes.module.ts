import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootRoutes } from './enums';
import { DefaultLayout } from './layouts';
import { AboutRoute, HomeRoute } from './routes';

export const routes: Routes = [
  {
    path: RootRoutes.Home,
    component: DefaultLayout,
    children: [{ path: '', component: HomeRoute }]
  },
  {
    path: RootRoutes.About,
    component: DefaultLayout,
    children: [{ path: '', component: AboutRoute }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutesModule {}
