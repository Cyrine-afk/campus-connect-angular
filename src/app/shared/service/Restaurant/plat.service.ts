import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Plat } from 'src/app/models/plat';
import { routes } from '../routes/routes';
import { Subject, Observable,BehaviorSubject,map } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PlatService {
  readonly API_URL = 'http://localhost:8083';
  constructor(private httpClient: HttpClient) { }
  
  getPlatById(idPlat: any){
    return this.httpClient.get(`${this.API_URL}/Resto/Plat/getPlatById/${idPlat}`)
  }
  getPlatNutritionInformation(nom: any): Observable<Plat> {
    const url = `${this.API_URL}/Resto/Plat/api/plats/${nom}`;
    return this.httpClient.get<Plat>(url);
  }
  getAllPlats() {
    return this.httpClient.get(`${this.API_URL}/Resto/Plat/allPlats`)
  }
  createPlat(Plat : any) {
    return this.httpClient.post(`${this.API_URL}/Resto/Plat/addPlat`, Plat)
  }
  updatePlat(idPlat: any, plat : Plat){
    return this.httpClient.put(`${this.API_URL}/Resto/Plat/updatePlat/${idPlat}`, Plat)
  }
  deletePlat(idPlat : any){
    return  this.httpClient.delete(`${this.API_URL}/Resto/Plat/deletePlat/${idPlat}`)
  }

}


