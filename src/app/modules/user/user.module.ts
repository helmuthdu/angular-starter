import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserDefaultLayout } from './layouts';
import { SignInRoute } from './routes';
import { UserRoutesModule } from './user-routes.module';

@NgModule({
  declarations: [UserDefaultLayout, SignInRoute],
  imports: [CommonModule, UserRoutesModule]
})
export class UserModule {}
