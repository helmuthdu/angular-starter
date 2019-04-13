import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';
import { metaReducers } from './app.stores';
import * as AppComponents from './components';
import * as AppModules from './modules';
import * as AppPipes from './pipes';
import * as AppRoutes from './routes';
import * as AppServices from './services';

@NgModule({
  declarations: [
    AppComponent,
    ...Object.values(AppComponents),
    ...Object.values(AppPipes),
    ...Object.values(AppRoutes)
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ...Object.values(AppModules.modules),
    AppRoutesModule,
    StoreModule.forRoot({ ...AppModules.reducers }, { metaReducers }),
    EffectsModule.forRoot([...AppModules.effects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [...Object.values(AppServices)],
  bootstrap: [AppComponent]
})
export class AppModule {}
