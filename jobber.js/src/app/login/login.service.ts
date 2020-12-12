import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services";
import { User } from "src/app/core/models";
import { Register } from "../core/components";
import { Login } from "./login.interface";
import { Token } from "./token.interface";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private apiService: ApiService) {}

  public getToken(loginRequest: Login): Observable<Token> {
    return this.apiService.post("/token/", loginRequest);
  }

  public registerNewUser(registerRequest: Register): Observable<User> {
    return this.apiService.post("/users/", registerRequest);
  }
}
