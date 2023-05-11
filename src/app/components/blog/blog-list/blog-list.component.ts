import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { PosteService } from 'src/app/services/poste.service';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { ToastrService } from 'ngx-toastr';








@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})


export class BlogListComponent implements OnInit {

  title = 'YOUR_FRENCH_TITLE';

  //public searchResults : any=[];
  searchKeyword: string = '';




  public blogListRecentPosts : any = [];
  public routes = routes;
  public blogList : any = [];
  public listPosts : any= [];
  Post!: Post;
  showFullContent = false;


 constructor(private DataService: DataService , private P: PosteService , private router: Router, private toastr: ToastrService) {
    this.blogListRecentPosts = this.DataService.blogListRecentPosts;
    //this.listPosts = this.P.getAllPosts;
    //this.listPosts=this.getAllPosts();
    //this.blogList=this.DataService.blogList;

    this.P.getAllPosts().subscribe(res => {
      this.listPosts = res;
      this.blogList=this.DataService.blogList;
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

    });
      }



    showMore1(post: any) {

      console.log('Clicked on "Read More" button:', post);

      const idPost = post.idPost;

      if (idPost) {
        console.log('Post ID:', idPost);

        this.router.navigate(['/blog-details', idPost, { showFullContent: true }]);
       // this.showFullContent = true;

      } else {
        console.error('Cannot navigate to blog details. Post ID is undefined or null.');
      }
    }


    hidePost(P: Post) {
      P.hidden = true;
    }


    onSearch(keyword: string) {
      this.P.search(keyword).subscribe(
        (posts: Post[]) => {
          this.listPosts = posts;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }



    signalerAbus(Post: Post) {
      const confirmed = window.confirm("Êtes-vous sûr de vouloir signaler cet abus ?");
      if (confirmed) {
        const raison = window.prompt("Pourquoi signalez-vous cet abus ?");
        console.log('Raison de signalement:', raison); // add this line to log the value of raison

        // Enregistrez la raison de signalement et l'ID du commentaire ou du post dans votre base de données.
        // Vous pouvez également afficher un message de confirmation à l'utilisateur.
        // Afficher une notification
        this.toastr.success('Merci d\'avoir signalé ce post !');
      }
    }


    /*likePost(Post: Post): void {
      this.P.likePost(Post.idPost).subscribe(updatedPost => {
        const index = this.listPosts.findIndex((p: Post) => p.idPost === Post.idPost);
        this.listPosts[index] = updatedPost;
      });
    }*/

    likePost(postId: number): void {
      this.P.likePost(postId).subscribe(updatedPost => {
        const index = this.listPosts.findIndex((p: Post) => p.idPost === postId);
        this.listPosts[index] = updatedPost;
      });
    }





}

