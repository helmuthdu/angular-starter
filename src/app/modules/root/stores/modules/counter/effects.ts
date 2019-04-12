import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { ActionTypes } from './types';

@Injectable()
export class Effects {
  @Effect()
  autoCounter$ = this.actions$.pipe(
    ofType(ActionTypes.AutoIncrement),
    delay(1000),
    map(() => ({ type: ActionTypes.Increment })),
    catchError(() => EMPTY)
  );

  constructor(private actions$: Actions) {}
}
