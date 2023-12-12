import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categorie } from "../models/categorie";
import { Observable, map, catchError, of } from "rxjs";



@Injectable({
    providedIn: 'root'
  })
export class Categorieservice {

    private url='http://localhost:9092'
    constructor(private http: HttpClient) { }



      getAllCategorie(): Observable<Categorie[]>{
        return this.http.get<Categorie[]>(this.url+`/categorie`);
      }


      ajouterCategorie(newCategory: Categorie): Observable<Categorie> {
        return this.http.post<Categorie>(this.url+`/categorie`, newCategory);
      }


      getCategorieteById(idCategorie:number): Observable<Categorie> {
        return this.http.get<Categorie>(this.url+`/categorie/${idCategorie}`);
      }


      updatecategorie(categorie: Categorie){
        return this.http.put(this.url+`/categorie`, categorie)
      }

      deleteCategorie(idCategorie:number) {
        return this.http.delete(this.url+`/categorie/${idCategorie}`);
      }
}
