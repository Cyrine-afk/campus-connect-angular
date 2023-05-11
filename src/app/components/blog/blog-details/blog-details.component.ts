import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { PosteService } from 'src/app/services/poste.service';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'; // <-- Importer le module rxjs ici
import { Commentaire } from 'src/app/models/commentaire';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';



@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  Post!: Post;
  Commentaire!: Commentaire;
  public comments : any= [];
  commentAdded: boolean = false;




  public blogDetailsRecentPosts : any = [];
  showCommentForm = false;
  //comments: string[] = [];
  public routes = routes;
  showFullContent = false;


  constructor(private DataService: DataService,private P: PosteService, private route: ActivatedRoute , private commentaireService: CommentaireService) {
    this.blogDetailsRecentPosts = this.DataService.blogDetailsRecentPosts;

    }

    form = new FormGroup({
      'Commentaire.contentCom': new FormControl('', Validators.required()),
       /*editorContent*/
    });


    onSubmitComment(comment: string) {
      this.comments.push(comment);
    }

    ngOnInit(): void {


      this.Commentaire = {
        idCom: null,
        contentCom: null,
        dateCreated: null

        }

   //Navigate from list-post =====> l=post-details
   const idPost = this.route.snapshot.paramMap.get('idPost');
   // Soooow FullContent
   this.showFullContent = this.route.snapshot.paramMap.has('showFullContent');
   console.log('Post ID received:', idPost);
   this.P.getPostById(idPost).subscribe(
    (data: any) => {
      console.log('Data received from API: ', data);
      this.Post = data;
    },
    (error: any) => {
      console.error(error);
    }
  );

    }





  onAddComment(Commentaire: Commentaire, idPost: any) {
    this.commentaireService.AddCommentPub(Commentaire, idPost).subscribe((res: any) => {

      console.log('Comment added successfully', res);
      this.Commentaire.contentCom = '';
      this.getComments(idPost);
    }, (error: any) => {
      console.log('Error adding comment', error);
    });
  }

  getComments(idPost: any) {
    //this.getComments(this.Post.idPost);

    this.commentaireService.getCommentsByPoste(idPost).subscribe((res: any) => {
      this.comments = res;
    }, (error: any) => {
      console.log('Error retrieving comments', error);
    });
  }


}
