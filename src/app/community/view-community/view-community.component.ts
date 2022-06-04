import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-community',
  templateUrl: './view-community.component.html',
  styleUrls: ['./view-community.component.css']
})
export class ViewCommunityComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }
  createPost() {
    this.router.navigateByUrl('/create-post');
  }


}
