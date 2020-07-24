import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { USER_PATHS } from '../paths';
import { DefaultLayout } from './layouts';
import { SignInRoute } from './routes';

const routes: Routes = [
  {
    path: USER_PATHS.SignIn,
    component: DefaultLayout,
    children: [{ path: '', component: SignInRoute }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutesModule {}
