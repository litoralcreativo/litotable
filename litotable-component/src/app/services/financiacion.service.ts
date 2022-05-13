import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FinanciacionDetalle } from '../models/FinanciacionDetalle.model';

@Injectable({
  providedIn: 'root',
})
export class FinanciacionService {
  financiacionService: Observable<any> | undefined;
  constructor(private http: HttpClient) {}

  getRandom(): Observable<FinanciacionDetalle[]> {
    return this.http
      .get<FinanciacionDetalle[]>(environment.financiacion + '/6')
      .pipe(
        map((u: FinanciacionDetalle[]) =>
          u.map((financiacion) => {
            let us = Object.assign(new FinanciacionDetalle(), financiacion);
            return us;
          })
        )
      );
  }

  deleteOne(): Observable<FinanciacionDetalle> {
    return this.http
      .delete<FinanciacionDetalle>(environment.financiacion + '/')
      .pipe(
        map((u: FinanciacionDetalle) =>
          Object.assign(new FinanciacionDetalle(), u)
        )
      );
  }

  createOne(): Observable<FinanciacionDetalle> {
    return this.http
      .post<FinanciacionDetalle>(environment.financiacion + '/', {})
      .pipe(
        map((u: FinanciacionDetalle) =>
          Object.assign(new FinanciacionDetalle(), u)
        )
      );
  }
}
