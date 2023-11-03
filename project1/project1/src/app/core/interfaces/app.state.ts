import { StateService } from "../services/state.service";

export interface AppState {
  user: User;
}

export interface User {
  id: number;
  name: string;
  // ...
}

export interface UserData {
    id: number;
    name: string;
    // add other properties as needed
}

export const initialState: AppState = {
  user: {
    id: 0,
    name: '',
    // ...
  },
  // ...
};

export function reducer(state: AppState = initialState, action: any): AppState {
  switch (action.type) {
    // Define your action types and corresponding state modifications here
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    // ...
    default:
      return state;
  }
}

export const stateService = new StateService(reducer);
