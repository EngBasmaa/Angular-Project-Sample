import { createReducer, on } from '@ngrx/store';
import { UserData } from '../interfaces/app.state';
import { updateUser } from '../actions/user.actions';

export const initialState: UserData = {
    id: 0,      //initialization
    name: '',   //initialization
};

export const userReducer = createReducer(
  initialState,
  on(updateUser, (state, { userData }) => userData)
);
