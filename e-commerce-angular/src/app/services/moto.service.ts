import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Moto} from "../models/moto";

@Injectable({
  providedIn: 'root'
})
export class MotoService {
  private apiUrl = 'http://localhost:9098/motos';

  constructor(private http: HttpClient) { }

  addProduit(moto: Moto): Observable<Moto> {
    return this.http.post<Moto>(this.apiUrl, moto);
  }

  updateMoto(moto: Moto): Observable<Moto> {
    const url = `${this.apiUrl}/${moto.id}`;
    return this.http.put<Moto>(url, moto);
  }

  getAllMotos(): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiUrl);
  }
  getMoto(id: string): Observable<Moto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Moto>(url);
  }

  deleteMoto(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
