import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private BASE_URL: string = `${environment.SERVER_URL}/message`;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = { withCredentials: true };
  }

  list(): Observable<any> {
    return this.http.get(this.BASE_URL, this.httpOptions);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.BASE_URL, data, this.httpOptions);
  }

  update(data: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/${data.id}`, data, this.httpOptions);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`, this.httpOptions);
  }
}
