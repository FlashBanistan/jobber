import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../shared/services/api.service";
import { Register } from "../register/register.interface";
import { User } from "../shared/interfaces/user";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private apiService: ApiService) {}

  public registerNewUser(registerRequest: Register): Observable<User> {
    return this.apiService.post("/users/", registerRequest);
  }
}
