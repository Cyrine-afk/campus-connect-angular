import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Fournisseur } from 'src/app/model/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.API_BASE_URL;

  getAllFourniseurs() {
    return this.httpClient.get(this.baseUrl + "/listFournisseur");
  }
  addFournisseur(Fournisseur: any) {
    return this.httpClient.post(this.baseUrl+ "/addFourn", Fournisseur);
  }
  editFournisseur(Fournisseur : any, idFourn: any){
    return this.httpClient.put(this.baseUrl + "/modifierFournisseur/${idFourn}", Fournisseur);
  } 
  deleteFournisseur(idFourn : any){
    return  this.httpClient.delete(this.baseUrl + "/deleteFournisseur/${idFourn}");
  }

}
