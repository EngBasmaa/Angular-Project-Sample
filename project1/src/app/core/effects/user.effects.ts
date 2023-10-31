import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { updateUser } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      tap(({ userData }) => {
        const stateString = JSON.stringify(userData);
        alert(`State: ${stateString}`);
      })
    )
  );

  constructor(private actions$: Actions) {}
}
