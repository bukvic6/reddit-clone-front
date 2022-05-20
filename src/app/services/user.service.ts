import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../users/userModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getAllPosts(): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>('http://localhost:8080/api/users/all');
  }
}
