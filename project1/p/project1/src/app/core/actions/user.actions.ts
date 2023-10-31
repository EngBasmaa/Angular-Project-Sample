import { createAction, props } from '@ngrx/store';
import { UserData } from '../interfaces/app.state';

export const updateUser = createAction(
  '[User] Update User',
  props<{ userData: UserData }>()
);
