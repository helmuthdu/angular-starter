import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutes } from '../routes';
import { DefaultLayout } from './layouts';
import { SignInRoute } from './routes';

const routes: Routes = [
  {
    path: UserRoutes.SignIn,
    component: DefaultLayout,
    children: [{ path: '', component: SignInRoute }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutesModule {}
