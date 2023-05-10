import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ngo } from 'src/app/models/ngo';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgoService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.API_BASE_URL;
  readonly API_URL = 'http://localhost:8000';

  getAllNgos() {
    return this.httpClient.get(this.baseUrl + "/listNGO");
  }                                
  addNgo(Ngo: any) {
    return this.httpClient.post(this.baseUrl+ "/addNGO", Ngo);
  }
  editNgo(Ngo : any, idNgo: any){
    return this.httpClient.put(`${this.API_URL}/modifierNGO/${idNgo}`, Ngo);
  }                                            
  deleteNgo(idNgo : any){
    return  this.httpClient.delete(`${this.API_URL}/deleteNGO/${idNgo}`);
  }                                               
}
