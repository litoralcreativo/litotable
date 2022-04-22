import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  async getAll(): Promise<User[]> {
    let response: User[] = [];
    await this.http
      .get<User[]>(environment.usersApi)
      .toPromise()
      .then((res) => {
        // parseo de objeto plano a clase concreta
        res.forEach((user: any) => {
          let u = Object.assign(new User(), user);
          u.bday = new Date(user.bday);
          response.push(u);
        });
      });
    return response;
  }
}
