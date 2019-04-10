import { AuthModule } from './auth/auth.module';
import * as authStores from './auth/stores';
import { RootModule } from './root/root.module';

export const mods = {
  AuthModule, RootModule
};

export type State = authStores.State;

export const stores = [...authStores.stores];
