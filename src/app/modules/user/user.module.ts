import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutesModule } from './user-routes.module';
import { DefaultLayout } from './layouts/default/default.layout';
import { SignInRoute } from './routes/sign-in/sign-in.route';

@NgModule({
  declarations: [DefaultLayout, SignInRoute],
  imports: [
    CommonModule,
    UserRoutesModule
  ]
})
export class UserModule {}
