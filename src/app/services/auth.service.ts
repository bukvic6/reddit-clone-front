import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { map, Observable } from 'rxjs';
import { SignupRequest } from '../registration/signupRequest.payload';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient) { }


signup(signupRequest: SignupRequest): Observable<any>{
  return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequest,{responseType: 'text'});

}
}

