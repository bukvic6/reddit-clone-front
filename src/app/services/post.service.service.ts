import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../post/postModel';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<Array<PostModel>>{
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/all');

  }
}
