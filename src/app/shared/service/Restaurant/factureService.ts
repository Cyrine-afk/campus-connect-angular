import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { routes } from '../routes/routes';
import { Subject, Observable,BehaviorSubject,map } from "rxjs";
import { FactureR } from 'src/app/models/facture';

@Injectable({
    providedIn: 'root'
  })
  export class FactureService{
    readonly API_URL = 'http://localhost:8083/FactureR';
    constructor(private httpClient: HttpClient) { }
  
  
    
      getFactureRById(idFactureR:any) {
        return this.httpClient.get(`${this.API_URL}/getfacturebyid/${idFactureR}`)

        }


        getAllfactures(): Observable<FactureR[]> {
          return this.httpClient.get<FactureR[]>(`${this.API_URL}/allFactures`);
        }
  }