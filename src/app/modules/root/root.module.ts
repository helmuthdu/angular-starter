import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultLayout } from './layouts/default/default.layout';
import { AboutRoute } from './routes/about/about.route';
import { HomeRoute } from './routes/home/home.route';
import { RootRoutes } from './root.routes';

@NgModule({
  declarations: [DefaultLayout, AboutRoute, HomeRoute],
  imports: [CommonModule, RootRoutes]
})
export class RootModule {}
