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
  constructor(private http: HttpClient) {}

  getRandom(): Observable<FinanciacionDetalle[]> {
    return this.http
      .get<FinanciacionDetalle[]>(environment.financiacion + '/4')
      .pipe(
        map((u: FinanciacionDetalle[]) =>
          u.map((financiacion) => {
            let us = Object.assign(new FinanciacionDetalle(), financiacion);
            return us;
          })
        )
      );
  }
}
