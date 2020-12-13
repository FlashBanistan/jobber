import { initialLoginState, LoginState } from "src/app/login/store/login-state";
import {
  initialRegisterState,
  RegisterState,
} from "src/app/register/store/register-state";
import { JobPostingState, initialJobPostingState } from "./job-posting-state";
import { Layout, initialLayoutState } from "./layout.state";

export interface AppState {
  login: LoginState;
  register: RegisterState;
  layout: Layout;
  jobPosting: JobPostingState;
}

export const initialAppState: AppState = {
  login: initialLoginState,
  register: initialRegisterState,
  layout: initialLayoutState,
  jobPosting: initialJobPostingState,
};
