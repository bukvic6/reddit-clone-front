import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServService {
  private apiServerUrl ='http://localhost:8080';

  constructor(private http:HttpClient) { }
  
  public getUsers(): Observable<User[]>{

    return this.http.get<User[]>(`${this.apiServerUrl}/users/all`);
  }
}
