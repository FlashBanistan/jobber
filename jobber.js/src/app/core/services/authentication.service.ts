import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services';
import { Token, User } from 'src/app/core/models';
import { Login, Register } from '../components';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private apiService: ApiService) {}

  public getToken(loginRequest: Login): Observable<Token> {
    return this.apiService.post('/token/', loginRequest);
  }

  public registerNewUser(registerRequest: Register): Observable<User> {
    return this.apiService.post('/users/', registerRequest);
  }
}
