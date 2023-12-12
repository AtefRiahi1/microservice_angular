import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Vetement } from '../models/vetement';


@Injectable({
  providedIn: 'root'
})
export class VetementService {

  constructor(private http: HttpClient) { }

  createVetement(vetement: Vetement) {
    return this.http.post(`http://localhost:9096/vetements`, vetement);
  }

  updateVetement(vetement: Vetement) {
    return this.http.put(`http://localhost:9096/vetements`, vetement);
  }

  getAllVetements() {
    return this.http.get<Vetement[]>(`http://localhost:9096/vetements`);
  }

  getVetementById(idVetement: number) {
    return this.http.get<Vetement>(`http://localhost:9096/vetements/${idVetement}`);
  }

  deleteVetement(idVetement: number) {
    return this.http.delete(`http://localhost:9096/vetements/${idVetement}`);
  }

}
