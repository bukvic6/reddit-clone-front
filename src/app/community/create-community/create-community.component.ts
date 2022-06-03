import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CommunityModel } from '../community-response';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  createCommunityForm: FormGroup;
  communityModel: CommunityModel;
  name = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private communityService: CommunityService) {
    this.createCommunityForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });
  this.communityModel = {
    name: '',
    description: ''
    }
  }

  ngOnInit(){
    this.createCommunityForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      description: new FormControl('',Validators.required)
    })
  }
  cancel() {
    this.router.navigateByUrl('/posts');
  }
  createCommunity(){
    this.communityModel.name = this.createCommunityForm.get('name')?.value;
    this.communityModel.description = this.createCommunityForm.get('description')?.value;
    this.communityService.createCommunity(this.communityModel).subscribe(data => {
      console.log(data);
    })
  }

}