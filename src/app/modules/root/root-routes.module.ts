import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPaths } from '../paths';
import { AppRootDefaultLayout } from './layouts';
import { AboutRoute, HomeRoute } from './routes';

export const routes: Routes = [
  {
    path: RootPaths.home,
    component: AppRootDefaultLayout,
    children: [{ path: '', component: HomeRoute }]
  },
  {
    path: RootPaths.about,
    component: AppRootDefaultLayout,
    children: [{ path: '', component: AboutRoute }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutesModule {}
