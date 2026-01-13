import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesa } from '../domain/despesas';

@Injectable({ providedIn: 'root' })
export class DespesaService {
  private readonly baseUrl = 'http://localhost:8080/despesa/despesas'; //

  constructor(private http: HttpClient) {}

  listar(): Observable<Despesa[]>{
    return this.http.get<Despesa[]>(this.baseUrl);
  }

}
