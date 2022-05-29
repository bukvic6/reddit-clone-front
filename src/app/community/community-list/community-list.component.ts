import { Component, OnInit } from '@angular/core';
import { CommunityModel } from '../community-response';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent implements OnInit {

  communities: Array<CommunityModel>;
  constructor(private communityService: CommunityService) { }

  ngOnInit(){
    this.communityService.getCommunityList().subscribe(data => {
      this.communities = data;
    }
    )
  }

}
