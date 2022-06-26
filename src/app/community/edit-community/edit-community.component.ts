import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunityModel, CommunityModelEdit } from '../community-response';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-edit-community',
  templateUrl: './edit-community.component.html',
  styleUrls: ['./edit-community.component.css']
})
export class EditCommunityComponent implements OnInit {
  id: number
  updateCommunityForm: FormGroup;
  communityModel: CommunityModelEdit;
  name = new FormControl('');
  description = new FormControl('');
  constructor(private route: ActivatedRoute,private router: Router, private communityService: CommunityService) { 
    this.updateCommunityForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.communityModel = {
      name: '',
      description: ''
    }
  }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.communityService.getCommunityById(this.id).subscribe(data => {
        this.communityModel = data
      })
  
    }
    EditCommunity(){
      this.communityModel.name = this.updateCommunityForm.get('name')?.value;
      this.communityModel.description = this.updateCommunityForm.get('description')?.value;
      this.communityService.saveCommunity(this.id,this.communityModel).subscribe(data => {
        this.router.navigateByUrl('/posts');
        console.log(data);
      })
    }
  
    Cancel(){
      this.router.navigateByUrl('/posts');
    }

}
