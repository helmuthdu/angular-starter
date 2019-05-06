import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutes } from './enums/routes.enum';
import { DefaultLayout } from './layouts/default/default.layout';
import { SignInRoute } from './routes/sign-in/sign-in.route';

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
