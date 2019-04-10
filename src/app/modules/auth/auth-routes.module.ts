import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from './enums/routes.enum';
import { DefaultLayout } from './layouts/default/default.layout';
import { SignInRoute } from './routes/sign-in/sign-in.route';

const routes: Routes = [
  {
    path: AuthRoutes.SignIn,
    component: DefaultLayout,
    children: [{ path: '', component: SignInRoute }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutesModule {}
