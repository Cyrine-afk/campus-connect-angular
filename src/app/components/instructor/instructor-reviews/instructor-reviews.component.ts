import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { PosteService } from 'src/app/services/poste.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-instructor-reviews',
  templateUrl: './instructor-reviews.component.html',
  styleUrls: ['./instructor-reviews.component.scss']
})
export class InstructorReviewsComponent implements OnInit {
  public routes = routes;
  public instructorReviews: any = [];
  selected='1';
  selected2='1';
  selected3='1';
  //selected3: string;

  public listPosts : any= [];
  Post!: Post;



  constructor(private DataService: DataService, private P: PosteService) {

    this.instructorReviews = this.DataService.instructorReviews;
    this.P.getAllPosts().subscribe(res => {
      this.listPosts = res;
      this.instructorReviews=this.DataService.instructorReviews;
    });
  }

  ngOnInit(): void {
    this.P.getAllPosts();

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

  getAllPosts(){
    console.log('Calling API to get all posts...'); //console.log

    this.P.getAllPosts().subscribe(res => {
      console.log('Received posts:', res); // console.log
      this.listPosts = res;
      console.log(this.listPosts); // Ajouter cette ligne

    });    }

    /*deletePost(idPost : any){
      this.P.deletePost(idPost).subscribe(() => this.getAllPosts())
    }*/

    deletePost(idPost: any) {
      if (confirm("Are you sure you want to delete this post?")) {
        this.P.deletePost(idPost).subscribe(() => {
          this.getAllPosts();
        });
      }
    }


    sortBy() {
      switch (this.selected3) {
        case "title":
          this.listPosts.sort((a: Post, b: Post) => a.title.localeCompare(b.title));
          break;
        case "nbLikes":
          this.listPosts.sort((a: Post, b: Post) => b.nbLikes - a.nbLikes);
          break;
        case "dateCreated":
          this.listPosts.sort((a: Post, b: Post) =>
              new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
          );
          break;
        default:
          break;
      }
    }




}
