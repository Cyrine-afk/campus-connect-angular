import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinancierService {

  constructor(
    private http : HttpClient
  ) { }

  add(data : any){
    return this.http.post('http://localhost:8089/servicefinancier/add-servicefinancier' , data)
   }
 
   getList(){
    return this.http.get('http://localhost:8089/servicefinancier/listServiceFinancier')
   }
 
   getById(id : any){
     return this.http.get('http://localhost:8089/servicefinancier/getServiceFinancier/'+id)
    }

  
 
   delete(id :any){
     return this.http.delete('http://localhost:8089/servicefinancier/deleteServiceFinancier/'+id)
   }
}
