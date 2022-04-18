import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpHandler,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getAll(): Promise<any[]> {
    return this.http.get<any[]>(environment.usersApi).toPromise();
  }
}
