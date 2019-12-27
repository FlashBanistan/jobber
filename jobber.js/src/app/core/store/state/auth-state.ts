import { Token } from 'src/app/core/models';

export interface Authentication {
  token: Token;
  isLoading: boolean;
  loginError: string;
  registerError: string;
}

export const initialAuthenticationState: Authentication = {
  token: null,
  isLoading: false,
  loginError: null,
  registerError: null,
};
