import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private SERVER_URL: string = environment.SERVER_URL;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = { withCredentials: true };
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.SERVER_URL}/login`, data, this.httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.SERVER_URL}/logout`, {}, this.httpOptions);
  }

  isAuthenticated(): Observable<any> {
    return this.http.get(`${this.SERVER_URL}/is-authenticated`, this.httpOptions);
  }
}
