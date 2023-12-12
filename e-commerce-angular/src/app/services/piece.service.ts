import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Pieces } from 'src/app/models/pieces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  baseUrl="http://localhost:9091"
  constructor(private http: HttpClient) { }

  addPiece(pieces: Pieces) {
    return this.http.post(this.baseUrl+`/piece`, pieces);
  }

  getPieceById(id:number): Observable<Pieces> {
    return this.http.get<Pieces>(this.baseUrl+`/piece/${id}`);
  }

  getAllPieces()   {
    return this.http.get<Pieces[]>(this.baseUrl+`/piece`);
  }

  deleteP(idP:number) {
    return this.http.delete(this.baseUrl+`/piece/${idP}`);
  }

  updateP(id:number,piece:Pieces){
    return this.http.put(this.baseUrl+`/piece/${id}`,piece);
  }


}
