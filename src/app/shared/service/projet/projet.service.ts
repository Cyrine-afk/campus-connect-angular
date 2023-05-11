import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
//servicetag

  constructor(
    private http : HttpClient
  ) { }

  postProjet(data:any){
    return this.http.post('http://localhost:8089/projets/add-Projet',data)
  }
  getProjet(){
    return this.http.get('http://localhost:8089/projets/listProjet')
  }

  putProjet(id:any , data : any){
    return this.http.put('http://localhost:8089/projets/modifierProjet/'+id , data)
  }

  deleteProjet(id : any){
    return this.http.delete('http://localhost:8089/projets/deleteProjet/'+id)
  }
}
