import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROOT_PATHS } from './modules/paths';
import { NotFoundRoute } from './routes';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: '', redirectTo: `/${ROOT_PATHS.Home}`, pathMatch: 'full' },
  { path: '**', component: NotFoundRoute }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
