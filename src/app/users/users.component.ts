import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { UserModel } from './userModel';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<UserModel> = [];


  constructor(private userService:UserService) {
    this.userService.getAllPosts().subscribe(data => {
      this.users = data;
    })
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
