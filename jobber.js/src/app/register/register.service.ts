import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../shared/services/api.service";
import { User } from "src/app/core/models";
import { Register } from "../register/register.interface";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private apiService: ApiService) {}

  public registerNewUser(registerRequest: Register): Observable<User> {
    return this.apiService.post("/users/", registerRequest);
  }
}
