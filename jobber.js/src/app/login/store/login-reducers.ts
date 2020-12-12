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
    default: {
      return state;
    }
  }
}
