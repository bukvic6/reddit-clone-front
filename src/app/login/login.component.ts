import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { loginRequest } from './loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  userReq: loginRequest;

  constructor(private formBuilder: FormBuilder,private http: HttpClient, private router: Router) {
    this.userReq = {
      username: '',
      password: ''
    }
  }

  ngOnInit(){
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),

    })
  }

  submit() {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:8080/api/users/login', JSON.stringify(this.form), {withCredentials: true})
      .subscribe((res: any) => {
        AuthInterceptor.accessToken = res.token;

        this.router.navigate(['/posts']);
      });
  }
  
  
}
