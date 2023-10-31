import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/app.state';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  dispatchActionToUpdateState(modifiedUserData: any) {
      throw new Error('Method not implemented.');
  }
  getState() {
      throw new Error('Method not implemented.');
  }
  private userStateSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public userState$ = this.userStateSubject.asObservable();

  constructor(private reducer: Function) {}


  updateUserState(user: User) {
    this.userStateSubject.next(user);
  }
}
