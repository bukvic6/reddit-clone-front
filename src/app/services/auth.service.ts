import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupRequest } from '../registration/signupRequest.payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


signup(signupRequest: SignupRequest): Observable<any>{
  return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequest,{responseType: 'text'});

}
}