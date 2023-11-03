import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, User } from '../interfaces/app.state';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store: Store<AppState>) {}

  updateUser(user: User) {
    this.store.dispatch({ type: 'UPDATE_USER', payload: user });
  }
}
