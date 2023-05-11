import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, tap, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class APIService {

    private url:string = 'http://localhost:8087'
    constructor(
        private http:HttpClient
    ){

    }
    getAbonnements(): Observable<any> {
        const headers = new HttpHeaders().set('x-header', 'x-value'); // Set additional headers
        return this.http.get<any>(`${this.url}/retrieve-all-subs/`, { headers });
      }


}