import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { PosteService } from 'src/app/services/poste.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogGridComponent implements OnInit, OnDestroy {

  public listPosts : any= [];
  //form : boolean = false;
  Post!: Post;
  closeResult! : string;



  public routes = routes;
  selected="1";
  selected2="1";
  public activeIndex:number=0
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];


  constructor( private P: PosteService ) {}




  form = new FormGroup({
    'Post.content': new FormControl('', Validators.required()),
     /*editorContent*/
  });

  ngOnInit(): void {
    this.editor = new Editor();

    this.Post = {
      idPost: null,
      title: null,
      content: null,
      dateCreated: null,
      imageP: null,
      nbLikes: null,
      hidden: false


      }


  }

  ajouterPost(Post: any){
     // Set the dateCreated property to the current date and time
   this.Post.dateCreated = new Date();
    this.P.ajouterPost(Post).subscribe(() => {
      location.reload();
      console.log(Post)
     this.P.getAllPosts();
      //this.form = false;
    });
  }
  onSubmit(nextIndex: number) {
  if (!this.Post.title || !this.Post.content) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  this.activeIndex = nextIndex;
}







  ngOnDestroy(): void {
    this.editor.destroy();
  }

  /*public onSubmit(index:number){
    this.activeIndex = index
  }
*/
  public onBack(index:number){
    this.activeIndex = index

  }
  }
