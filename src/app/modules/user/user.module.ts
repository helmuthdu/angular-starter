import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultLayout } from './layouts';
import { SignInRoute } from './routes';
import { UserRoutesModule } from './user-routes.module';

@NgModule({
  declarations: [DefaultLayout, SignInRoute],
  imports: [
    CommonModule,
    UserRoutesModule
  ]
})
export class UserModule {}
