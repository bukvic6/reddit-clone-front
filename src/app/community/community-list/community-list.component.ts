import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityModel } from '../community-response';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent implements OnInit {

  communities: CommunityModel[];
  constructor(private communityService: CommunityService, private router:Router) { }

  ngOnInit(): void{

    this.getCommunities();
  }
  private getCommunities(){
    this.communityService.getCommunityList().subscribe(data => {
      this.communities = data;
    })
  }
  communityDetails(id:number){
    this.router.navigate(['view-community',id]);
  }

}
