import { AuthModule } from './auth/auth.module';
import * as authStores from './auth/stores';

import { RootModule } from './root/root.module';
import * as rootStores from './root/stores';

export type State = authStores.State & rootStores.State;

export const modules = {
  AuthModule,
  RootModule
};

export const reducers = Object.values([...authStores.stores, ...rootStores.stores])
  .filter((store: any) => store.reducer)
  .reduce((acc: any, store: any) => {
    acc[store.name] = store.reducer;
    return acc;
  }, {});

export const effects = Object.values([...authStores.stores, ...rootStores.stores])
  .filter((store: any) => store.Effects)
  .map((store: any) => store.Effects);
