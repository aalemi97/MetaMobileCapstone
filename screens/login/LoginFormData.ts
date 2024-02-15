import {validateName, validateEmail} from '../../utilities/validation';
import {User} from '../../models/User';

export type MMCTarget = {
  value: string;
  touched: boolean;
  valid: boolean;
};

interface State {
  firstName: MMCTarget;
  lastName: MMCTarget;
  email: MMCTarget;
}

interface Action {
  type:
    | 'set_firstName'
    | 'set_lastName'
    | 'set_email'
    | 'set_touched'
    | 'reset';
  value: string;
  target: 'firstName' | 'lastName' | 'email';
}

export function createInitialState(user?: User): State {
  if (user) {
    return {
      firstName: {value: user.firstName, touched: false, valid: true},
      lastName: {value: user.lastName, touched: false, valid: true},
      email: {value: user.email, touched: false, valid: true},
    };
  } else {
    return {
      firstName: {value: '', touched: false, valid: false},
      lastName: {value: '', touched: false, valid: false},
      email: {value: '', touched: false, valid: false},
    };
  }
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'set_firstName':
      return {
        ...state,
        firstName: {
          ...state.firstName,
          value: action.value,
          valid: validateName(action.value),
        },
      };
    case 'set_lastName':
      return {
        ...state,
        lastName: {
          ...state.lastName,
          value: action.value,
          valid: validateName(action.value),
        },
      };
    case 'set_email':
      return {
        ...state,
        email: {
          ...state.email,
          value: action.value,
          valid: validateEmail(action.value),
        },
      };
    case 'set_touched':
      return {
        ...state,
        [action.target]: {
          ...state[action.target],
          touched: true,
        },
      };
    case 'reset':
      return createInitialState();
  }
}
