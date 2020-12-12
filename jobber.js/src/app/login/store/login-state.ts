import { Token } from "../token.interface";

export interface LoginState {
  token: Token;
  isLoading: boolean;
  loginError: string;
  registerError: string;
}

export const initialLoginState: LoginState = {
  token: null,
  isLoading: false,
  loginError: null,
  registerError: null,
};
