import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { RootActionTypes } from './types';

@Injectable()
export class Effects {
  autoCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RootActionTypes.autoIncrement),
      delay(1000),
      map(() => ({ type: RootActionTypes.increment })),
      catchError(() => EMPTY)
    )
  );

  constructor(private actions$: Actions) {}
}
