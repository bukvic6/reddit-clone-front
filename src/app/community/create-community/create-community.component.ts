import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
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
    name: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required)
  });
  this.communityModel = {
    name: '',
    description: ''
    }
  }

  ngOnInit(){
  }
  cancel() {
    this.router.navigateByUrl('/');
  }
  createCommunity(){
    this.communityModel.name = this.createCommunityForm.get('name')?.value;
    this.communityModel.description = this.createCommunityForm.get('description')?.value;
    this.communityService.createCommunity(this.communityModel).subscribe(data => {
      this.router.navigateByUrl('/')
    })
  }

}