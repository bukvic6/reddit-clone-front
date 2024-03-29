import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowUp , faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { PostServiceService } from 'src/app/services/post.service.service';
import { ReactionService } from 'src/app/services/reaction.service';


import { PostModel } from '../postModel';
import { Type } from '../vote-button/type';
import { vote } from '../vote-button/vote';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: PostModel[];
  reaction: vote = new vote();
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;

 


  constructor(private router: Router,private reactionService: ReactionService,private postService: PostServiceService) { }

  ngOnInit(): void{

    this.getPosts();
  }
  private getPosts(){
    this.postService.getAllPost().subscribe(data => {
      this.posts = data;
    })
  }
  upvote(postId: number){
    this.reaction.postId = postId
    this.reaction.type = Type.UPVOTE;
    this.vote();
    this.upvoteColor = '';
    

  }
  downvote(postId: number){
    this.reaction.postId = postId;
    this.reaction.type = Type.DOWNVOTE;
    this.vote();
    this.downvoteColor = '';
  }
  private vote(){
    this.reactionService.reaction(this.reaction).subscribe(() => {
      this.reaction = this.reaction;
    })
}
HomePage(){
  this.router.navigate(['/posts']);
}
deletePost(id:number){
  this.postService.deletePost(id).subscribe(data => {
    this.posts = data;
   
  });
}
editPost(id:number){
  this.router.navigate(['updatePost',id]);
}
   
}
