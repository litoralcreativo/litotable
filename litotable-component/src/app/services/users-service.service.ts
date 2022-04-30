import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.usersApi).pipe(
      map((u: User[]) =>
        u.map((user) => {
          let us = Object.assign(new User(), user);
          us.bday = new Date(user.bday);
          return us;
        })
      )
    );
  }
}
