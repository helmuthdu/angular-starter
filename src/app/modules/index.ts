import { AuthModule } from './auth/auth.module';
import * as authStores from './auth/stores';
import { RootModule } from './root/root.module';

export type State = authStores.State;

export const mods = {
  AuthModule,
  RootModule
};

export const reducers = Object.values([...authStores.stores])
  .filter((store: any) => store.reducer)
  .reduce((acc: any, store: any) => {
    acc[store.name] = store.reducer;
    return acc;
  }, {});

export const effects = Object.values([...authStores.stores])
  .filter((store: any) => store.Effect)
  .map((store: any) => store.Effect);
