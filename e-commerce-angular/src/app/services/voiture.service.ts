import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {Voiture} from "../models/voiture";

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  url='http://localhost:9095/voiture';
  constructor(private http:HttpClient) { }
  public list():Observable<Voiture[]>{
    return this.http.get<Voiture[]>('http://localhost:9097/voiture');
  }
  public detail(id:string):Observable<Voiture>{
    return this.http.get<Voiture>('http://localhost:9097/voiture/detail/'+id);
  }
  upload(formData:FormData):Observable<HttpEvent<string>>{
    return this.http.post<string>(this.url+`/upload`,formData,{
      reportProgress:true,
      observe:'events'
    });
  }
  public delete(id:string){
    return this.http.delete(this.url+'/'+id);
  }
  public update(voiture:Voiture,id:string):Observable<Voiture>{
    return this.http.put<Voiture>(this.url+'/'+id,voiture);
  }
  public add(voiture:Object):Observable<Voiture>{
    return this.http.post<Voiture>(this.url,voiture);
  }

}
