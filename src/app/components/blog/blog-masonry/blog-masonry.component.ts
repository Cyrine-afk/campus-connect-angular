import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { PosteService } from 'src/app/services/poste.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-blog-masonry',
  templateUrl: './blog-masonry.component.html',
  styleUrls: ['./blog-masonry.component.scss']
})
export class BlogMasonryComponent implements OnInit {
  public blogListRecentPosts : any = [];
  public routes = routes;
  public blogList : any = [];
  public listPosts : any= [];
  Post!: Post;

  public blogMasonry : any = [];

  constructor(private DataService: DataService , private P: PosteService ) {
    this.blogMasonry = this.DataService.blogMasonry;
     this.blogList = this.P.getAllPosts;
    //this.blogList=this.DataService.blogList;
    }

  ngOnInit(): void {
    this.P.getAllPosts();;

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
      this.P.getAllPosts().subscribe(res => this.listPosts = res)
      }
  }

