import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Fournisseur } from 'src/app/models/fournisseur';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.API_BASE_URL;
  readonly API_URL = 'http://localhost:8000';

  getAllFourniseurs() {
    return this.httpClient.get(this.baseUrl + "/listFournisseur");
  }
  getFournisseur(id:any) {
    return this.httpClient.get(`${this.API_URL}/getFournisseurSingle/${id}`);
  }                                 
  addFournisseur(Fournisseur: any) {
    return this.httpClient.post(this.baseUrl+ "/addFourn", Fournisseur);
  }
  editFournisseur(Fournisseur : any, idFourn: any){
    return this.httpClient.put(`${this.API_URL}/modifierFournisseur/${idFourn}`, Fournisseur);
  } 
  deleteFournisseur(idFourn : any){
    return  this.httpClient.delete(`${this.API_URL}/deleteFournisseur/${idFourn}`);
    // .toPromise()
    // .then((response) => {
    //   console.log('Fournisseur deleted successfully:', response);
    //   return response;
    // })
    // .catch((error) => {
    //   console.log('Error deleting fournisseur:', error);
    //   throw error;
    // });

    //return  this.httpClient.delete(`${this.API_URL}/delete-product/${idProduct}`);
  }

}
