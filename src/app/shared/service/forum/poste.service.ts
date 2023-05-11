import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Post } from 'src/app/models/forum/post';




@Injectable({
  providedIn: 'root'
})
export class PosteService {

  readonly API_URL = 'http://localhost:8083';


  constructor(private httpClient: HttpClient) { }


  getAllPosts() {
    console.log('Calling API to get all posts...'); // Ajouter cette ligne

    return this.httpClient.get(`${this.API_URL}/CampusConnect/Forum/Post/listPosts`)
  }
  
  getPostById(idPost : any) {
    console.log('Calling API to get all posts...'); // Ajouter cette ligne
    console.log('Fetching post with ID:', idPost);

    return this.httpClient.get(`${this.API_URL}/CampusConnect/Forum/Post/getPost/${idPost}`)
  }
  
  ajouterPost(Post : any) {
    return this.httpClient.post(`${this.API_URL}/CampusConnect/Forum/Post/ajouter-post`, Post)
  }
  

  likePost(idPost: number): Observable<Post> {
    const url = `${this.API_URL}/CampusConnect/Forum/Post/${idPost}/like`;
    return this.httpClient.post<Post>(url, {});
  }
    
  
  updatePost(Post : any, idPost : any) {
    return this.httpClient.put(`${this.API_URL}/CampusConnect/Forum/Post/modifierPost/${idPost}`, Post);
}


 deletePost(idPost : any){
    return  this.httpClient.delete(`${this.API_URL}/CampusConnect/Forum/Post/deletePost/${idPost}`)

}

search(keyword: string):Observable<Post[]>{

  return  this.httpClient.get<Post[]>(`${this.API_URL}/CampusConnect/Forum/Post/search?keyword=${keyword}`)

}







  }