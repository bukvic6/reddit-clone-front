import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/post/postModel';
import { PostServiceService } from 'src/app/services/post.service.service';
import { CommunityModel } from '../community-response';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-view-community',
  templateUrl: './view-community.component.html',
  styleUrls: ['./view-community.component.css']
})
export class ViewCommunityComponent implements OnInit {
  id: number;
  community: CommunityModel;
  posts: PostModel[];


  constructor(private route: ActivatedRoute,private router: Router,private postService: PostServiceService, private communityservice: CommunityService) { }

  ngOnInit(): void{
    
    this.id = this.route.snapshot.params['id'];
    this.getPostsByCommunityId(this.id);
    this.community = new CommunityModel();
    this.communityservice.getCommunityById(this.id).subscribe( data => {
      this.community = data
    })
  }
  createPost(id:number) {
    this.router.navigate(['create-post',id]);
  }
  EditCommunity(id:number) {
    this.router.navigate(['editCommunity',id]);
  }
  private getPostsByCommunityId(id:number){
    this.postService.getPostsByCommunityId(id).subscribe(data => {
      this.posts = data;
    })
  }


}
