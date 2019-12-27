import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}${path}`, body).pipe(catchError(this.formatErrors));
  }

  patch(path: string, body: object = {}): Observable<any> {
    return this.http
      .patch(`${environment.apiUrl}${path}`, body)
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, body).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}`).pipe(catchError(this.formatErrors));
  }

  downloadFile(path): Observable<Blob> {
    return this.http
      .get(`${environment.apiUrl}${path}`, { responseType: 'blob' })
      .pipe(catchError(this.formatErrors));
  }
}
