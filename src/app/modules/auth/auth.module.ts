import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutesModule } from './auth-routes.module';
import { DefaultLayout } from './layouts/default/default.layout';
import { SignInRoute } from './routes/sign-in/sign-in.route';

@NgModule({
  declarations: [DefaultLayout, SignInRoute],
  imports: [
    CommonModule,
    AuthRoutesModule
  ]
})
export class AuthModule {}
