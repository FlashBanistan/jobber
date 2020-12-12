import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services";
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
}
