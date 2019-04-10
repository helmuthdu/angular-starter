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
import * as AppModules from './modules';
import * as AppRoutes from './routes';
import * as AppServices from './services';
import { metaReducers, reducers } from './stores/modules/user/reducer';

@NgModule({
  declarations: [AppComponent, ...Object.values(AppRoutes)],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ...Object.values(AppModules.mods),
    AppRoutesModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot({
      app: reducers,
      ...Object.values(AppModules.stores)
        .filter((store: any) => store.reducer)
        .reduce((acc: any, store: any) => {
          acc[store.name] = store.reducer;
          return acc;
        }, {})
    }),
    EffectsModule.forRoot(
      Object.values(AppModules.stores)
        .filter((store: any) => store.Effect)
        .map((store: any) => store.Effect)
    ),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [...Object.values(AppServices)],
  bootstrap: [AppComponent]
})
export class AppModule {}
