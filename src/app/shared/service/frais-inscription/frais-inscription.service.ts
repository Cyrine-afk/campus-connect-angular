import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FraisInscriptionService {

  constructor(
    private http :HttpClient
  ) { }

  add(data : any){
   return this.http.post('http://localhost:8089/revenus/add-revenus' , data)
  }

  getFrais(){
   return this.http.get('http://localhost:8089/revenus/listRevenus')
  }

  getFraisById(id : any){
    return this.http.get('http://localhost:8089/revenus/getRevenus/'+id)
   }

  editFrais(data:any , id : any){
    return this.http.put('http://localhost:8089/revenus/modifierRevenus/'+id , data)

  }
 

  delete(id :any){
    return this.http.delete('http://localhost:8089/revenus/deleteRevenus/'+id)
  }
}
