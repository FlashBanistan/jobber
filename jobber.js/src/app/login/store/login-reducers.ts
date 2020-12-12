import { initialLoginState, LoginState } from "./login-state";
import { LoginActions, LoginActionTypes } from "./login-actions";

export function loginReducers(
  state = initialLoginState,
  action: LoginActions
): LoginState {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loginError: null,
        isLoading: true,
      };
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        loginError: null,
        isLoading: false,
      };
    case LoginActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload.error,
        isLoading: false,
      };
    case LoginActionTypes.LOGIN_CLEAR_ERROR:
      return {
        ...state,
        loginError: null,
      };
    case LoginActionTypes.LOGOUT_REQUEST:
      return initialLoginState;
    case LoginActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        registerError: null,
        isLoading: true,
      };
    case LoginActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        registerError: action.payload.error,
        isLoading: false,
      };
    case LoginActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        registerError: null,
        isLoading: false,
      };
    case LoginActionTypes.REGISTER_CLEAR_ERROR:
      return {
        ...state,
        registerError: null,
      };
    default: {
      return state;
    }
  }
}
