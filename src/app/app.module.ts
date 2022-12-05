import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, FullRouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';
import { metaReducers } from './app.stores';
import AppComponents from './components';
import AppModules from './modules';
import AppPipes from './pipes';
import AppRoutes from './routes';
import AppServices from './services';

@NgModule({
  declarations: [AppComponent, ...AppComponents, ...AppPipes, ...AppRoutes],
  imports: [
    BrowserModule,
    ...AppModules.modules,
    AppRoutesModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({ ...AppModules.reducers }, { metaReducers }),
    EffectsModule.forRoot([...AppModules.effects]),
    StoreRouterConnectingModule.forRoot({ serializer: FullRouterStateSerializer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [...AppServices],
  bootstrap: [AppComponent]
})
export class AppModule {}
