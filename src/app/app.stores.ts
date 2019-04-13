import { MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';
import { State } from './modules';

export type AppState = State;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
