import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultLayout } from './layouts';
import { RootRoutesModule } from './root-routes.module';
import { AboutRoute, HomeRoute } from './routes';

@NgModule({
  declarations: [DefaultLayout, AboutRoute, HomeRoute],
  imports: [CommonModule, RootRoutesModule]
})
export class RootModule {}
