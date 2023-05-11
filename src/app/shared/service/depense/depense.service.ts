import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {
  constructor(
    private http : HttpClient
  ) { }

  postDepense(data:any){
    return this.http.post('http://localhost:8089/depenses/add-depenses' , data)
  }

  getDeoense(){
    return this.http.get('http://localhost:8089/depenses/listDepenses')
  }

  update(data:any , id : any){
    return this.http.put('http://localhost:8089/depenses/modifierDepenses/'+id ,data)
  }

  deleteDepense(id : any){
    return this.http.delete('http://localhost:8089/depenses/deleteDepenses/'+id)
  }

  getDepenseById(id : any){
    return this.http.get('http://localhost:8089/depenses/getDepenses/'+id)
  }
}
