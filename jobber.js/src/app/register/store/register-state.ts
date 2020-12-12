export interface RegisterState {
  isLoading: boolean;
  registerError: string;
}

export const initialRegisterState: RegisterState = {
  isLoading: false,
  registerError: null,
};
