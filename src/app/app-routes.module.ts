import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootRoutes } from './modules/root/enums/routes.enum';
import { NotFoundRoute } from './routes';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/root/root.module').then(m => m.RootModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: '', redirectTo: `/${RootRoutes.Home}`, pathMatch: 'full' },
  { path: '**', component: NotFoundRoute }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
