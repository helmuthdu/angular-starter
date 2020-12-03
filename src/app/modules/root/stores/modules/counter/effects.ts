import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { RootActionTypes } from './types';

@Injectable()
export class Effects {
  @Effect()
  autoCounter$ = this.actions$.pipe(
    ofType(RootActionTypes.autoIncrement),
    delay(1000),
    map(() => ({ type: RootActionTypes.increment })),
    catchError(() => EMPTY)
  );

  constructor(private actions$: Actions) {}
}
