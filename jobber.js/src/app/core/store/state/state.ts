import { initialLoginState, LoginState } from "src/app/login/store/login-state";
import {
  initialRegisterState,
  RegisterState,
} from "src/app/register/store/register-state";
import { JobSearch, initialJobSearchState } from "./job-search-state";
import { Layout, initialLayoutState } from "./layout.state";

export interface AppState {
  login: LoginState;
  register: RegisterState;
  layout: Layout;
  jobSearch: JobSearch;
}

export const initialAppState: AppState = {
  login: initialLoginState,
  register: initialRegisterState,
  layout: initialLayoutState,
  jobSearch: initialJobSearchState,
};
