import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 




@Injectable({
    providedIn: 'root'
  })
export class CommentaireService {

    readonly API_URL = 'http://localhost:8083';
    constructor(private httpClient: HttpClient) { }

    getCommentsByPoste(idPost : any) {
        console.log('Calling API to get all Comments by Post...'); // Ajouter cette ligne
    
        return this.httpClient.get(`${this.API_URL}/CampusConnect/Forum/Post/comments/${idPost}`)
      }
      
    AddCommentPub(Commentaire : any, idPost : any) {
      
        
       return this.httpClient.post(`${this.API_URL}/CampusConnect/Forum/Commentaire/AddCommentPub/${idPost}`,Commentaire)
                                                      }
      
    
    
      updateCom(Commentaire : any, idCom : any) {
        return this.httpClient.put(`${this.API_URL}/CampusConnect/Forum/Commentaire/modifierPost/${idCom}`, Commentaire);
    }
    
    
    
      deleteCom(idCom : any){
        return  this.httpClient.delete(`${this.API_URL}/CampusConnect/Forum/Commentaire/deletePost/${idCom}`)
    
    }
    
    







}
