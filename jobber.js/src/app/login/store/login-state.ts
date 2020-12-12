import { Token } from "../token.interface";

export interface LoginState {
  token: Token;
  isLoading: boolean;
  loginError: string;
}

export const initialLoginState: LoginState = {
  token: null,
  isLoading: false,
  loginError: null,
};
