import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunityModel } from 'src/app/community/community-response';
import { CommunityService } from 'src/app/community/community.service';
import { PostServiceService } from 'src/app/services/post.service.service';
import { PostModel } from '../postModel';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: PostModel = new PostModel();
  id: number;
  community: CommunityModel;

  constructor(private communityservice: CommunityService,private route: ActivatedRoute,private postService: PostServiceService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.community = new CommunityModel();
    this.communityservice.getCommunityById(this.id).subscribe( data => {
      this.community = data
    })
   
  }
  createPost(){
    this.post.community = this.community
    this.postService.createPost(this.post).subscribe( data =>{
      console.log(data);
      this.HomePage();
      
    }, 
    error => console.log(error));
    
  }
  HomePage(){
    this.router.navigate(['/posts']);
  }
  onSubmit(){
    console.log(this.post);
    this.createPost();
  }
  cancel(){
    this.router.navigate(['/posts']);
  }

}
