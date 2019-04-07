import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRoutes } from './routes/root.routes';
import { HomeRoute } from './routes/home/home.route';

@NgModule({
  declarations: [HomeRoute],
  imports: [CommonModule, RouterModule.forRoot(rootRoutes)]
})
export class RootModule {}
