import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(
    private http : HttpClient
  ) { }

  getReclamation(){
    return this.http.get('http://localhost:8089/reclamation/listReclamations')
  }

  postReclamation(data:any){
    console.log('reclamation',data)
    return this.http.post('http://localhost:8089/reclamation/add-reclamation' , data)
  }

  updateReclamation(data:any , id:any){
    return this.http.put('http://localhost:8089/reclamation/modifierReclamation/'+id , data)
  }

  postRepondre(data:any , id : any){
    console.log('reclamation',data)
    return this.http.post('http://localhost:8089/response/add-response/'+id , data)
  }

  delete(id:any){
    return this.http.delete('http://localhost:8089/reclamation/deleteReclamation/'+id)
  }

  nombreDeReclamation(){
    return this.http.get("http://localhost:8089/reclamation/nombresReclamationAujourdhui")
  }
}
