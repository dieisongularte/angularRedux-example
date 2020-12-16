import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Cep } from '../models/cep';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class viaCepService {
  cepApi = `${environment.cepApi}`;

  constructor(private http: HttpClient) {}

  getOneCharacter(id: string): Observable<Cep> {
    return this.http
      .get<Cep>(`${this.cepApi}/${id}/${'json'}`)
      .pipe(tap(res => console.log(res)));
  }

}