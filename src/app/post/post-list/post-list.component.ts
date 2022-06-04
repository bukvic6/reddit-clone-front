import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post.service.service';
import { PostModel } from '../postModel';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Array<PostModel>

  constructor(private postService: PostServiceService) { }

  ngOnInit(){
    this.postService.getAllPost().subscribe(data =>{
      this.posts = data;
    })
  }

}
