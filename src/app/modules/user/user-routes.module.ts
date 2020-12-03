import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPaths } from '../paths';
import { UserDefaultLayout } from './layouts';
import { SignInRoute } from './routes';

const routes: Routes = [
  {
    path: UserPaths.signIn,
    component: UserDefaultLayout,
    children: [{ path: '', component: SignInRoute }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutesModule {}
