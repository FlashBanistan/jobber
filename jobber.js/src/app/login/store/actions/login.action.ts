import { createAction, props } from "@ngrx/store";
import { Login } from "../../login.interface";

export const login = createAction("[Login] Login", props<Login>());
