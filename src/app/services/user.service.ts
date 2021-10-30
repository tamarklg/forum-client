import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL: string = `${environment.SERVER_URL}/user`;
  private httpOptions: any;

  userChange: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    this.httpOptions = { withCredentials: true };

    this.initUser();
  }

  initUser(): void {
    this.http.get(this.BASE_URL, this.httpOptions).subscribe((res: any) => this.userChange.next(res.data));
  }
}
