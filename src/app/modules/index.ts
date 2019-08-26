import { RootModule } from './root/root.module';
import * as rootStores from './root/stores';
import * as userStores from './user/stores';

import { UserModule } from './user/user.module';

export type State = userStores.State & rootStores.State;

const modules = [RootModule, UserModule];

const reducers = Object.values([...rootStores.stores, ...userStores.stores])
  .filter((store: any) => store.reducer)
  .reduce((acc: any, store: any) => {
    acc[store.name] = store.reducer;
    return acc;
  }, {});

const effects = Object.values([...rootStores.stores, ...userStores.stores])
  .filter((store: any) => store.Effects)
  .map((store: any) => store.Effects);

export default {
  modules,
  reducers,
  effects
};
