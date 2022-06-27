import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SignupRequest } from './signupRequest.payload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupForm: FormGroup;
  signupRequest:SignupRequest
  constructor(private authService:AuthService, private router: Router) {
    this.signupRequest = {
      username: '',
      email: '',
      password: '',
    }

  }

  ngOnInit(){
    this.signupForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      email: new FormControl('', Validators.required),
      password: new FormControl('',[ Validators.required]),

    })
  }
  signup(){
    this.signupRequest.email = this.signupForm.get('email')?.value;
    this.signupRequest.username = this.signupForm.get('username')?.value;
    this.signupRequest.password = this.signupForm.get('password')?.value;
    
    
    this.authService.signup(this.signupRequest).subscribe(data =>{}, error => {
      console.log(error);
    });

  }

}
