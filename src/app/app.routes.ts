import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundRoute } from './routes';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' }, { path: '**', component: NotFoundRoute }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
