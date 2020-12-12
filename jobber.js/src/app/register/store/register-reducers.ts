import { initialRegisterState, RegisterState } from "./register-state";
import { RegisterActions, RegisterActionTypes } from "./register-actions";

export function registerReducers(
  state = initialRegisterState,
  action: RegisterActions
): RegisterState {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        registerError: null,
        isLoading: true,
      };
    case RegisterActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        registerError: action.payload.error,
        isLoading: false,
      };
    case RegisterActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        registerError: null,
        isLoading: false,
      };
    case RegisterActionTypes.REGISTER_CLEAR_ERROR:
      return {
        ...state,
        registerError: null,
      };
    default: {
      return state;
    }
  }
}
