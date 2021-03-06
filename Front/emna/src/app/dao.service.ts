import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Odp } from './odp';

@Injectable({
  providedIn: 'root'
})



export class DaoService {

 baseUrl = 'http://localhost:8762/';
  constructor(private http: HttpClient) { 

  }

  ajouterObjet(objet: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, objet);
  }


getListeObjets(): Observable<any> {
  return this.http.get(`${this.baseUrl}`);
}

getObjet(id): Observable<any> {
  return this.http.get(`${this.baseUrl}/${id}`);
}

getObjet2(id,dateFin): Observable<any> {
  return this.http.get(`${this.baseUrl}/${dateFin}/${id}`);
}

supprimerObjet(id): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}



}