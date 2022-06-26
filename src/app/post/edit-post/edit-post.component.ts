import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PostServiceService } from 'src/app/services/post.service.service';
import { PostMod, PostModel } from '../postModel';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
id: number
updateCommunityForm: FormGroup;
postModel: PostMod
text = new FormControl('');
title = new FormControl('');
constructor(private route: ActivatedRoute,private router: Router, private postService: PostServiceService) { 
  this.updateCommunityForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required)
  });
  this.postModel = {
    text: '',
    title: ''
  }
}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.getPostById(this.id).subscribe(data => {
      this.postModel = data
    })

  }
  EditPost(){
    this.postModel.title = this.updateCommunityForm.get('title')?.value;
    this.postModel.text = this.updateCommunityForm.get('text')?.value;
    this.postService.savePost(this.id,this.postModel).subscribe(data => {
      this.router.navigateByUrl('/posts');
      console.log(data);
    })
  }

  Cancel(){
    this.router.navigateByUrl('/posts');
  }

}
