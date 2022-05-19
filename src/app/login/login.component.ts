import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  public wrongUsernameOrPass:boolean;

  constructor(private authenticationService:AuthenticationService, private router: Router) { 
    this.user = {};
    this.wrongUsernameOrPass = false;
  }

  ngOnInit(){
  }
  
}
