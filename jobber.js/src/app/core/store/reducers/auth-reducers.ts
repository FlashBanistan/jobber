import { initialAuthenticationState, Authentication } from '../state/auth-state';
import { AuthActions, ActionTypes } from '../actions/auth-actions';

export function authReducers(
  state = initialAuthenticationState,
  action: AuthActions,
): Authentication {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loginError: null,
        isLoading: true,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        loginError: null,
        isLoading: false,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload.error,
        isLoading: false,
      };
    case ActionTypes.LOGIN_CLEAR_ERROR:
      return {
        ...state,
        loginError: null,
      };
    case ActionTypes.LOGOUT_REQUEST:
      return initialAuthenticationState;
    case ActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        registerError: null,
        isLoading: true,
      };
    case ActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        registerError: action.payload.error,
        isLoading: false,
      };
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        registerError: null,
        isLoading: false,
      };
    case ActionTypes.REGISTER_CLEAR_ERROR:
      return {
        ...state,
        registerError: null,
      };
    default: {
      return state;
    }
  }
}
