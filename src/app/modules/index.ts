import { RootModule } from './root/root.module';
import * as rootStores from './root/stores';

import { UserModule } from './user/user.module';
import * as authStores from './user/stores';

export type State = authStores.State & rootStores.State;

export const modules = {
  RootModule,
  UserModule
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
