import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../post/postModel';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<PostModel[]>{
    return this.http.get<PostModel[]>('http://localhost:8080/api/posts/all');

  }
  getPostsByCommunityId(id:number): Observable<PostModel[]>{
    return this.http.get<PostModel[]>('http://localhost:8080/api/posts/communityPosts/' + id);

  }
  createPost(postModel:PostModel): Observable<Object>{
    return this.http.post('http://localhost:8080/api/posts', postModel);
  }
  deletePost(id: number): Observable<any>{
    return this.http.delete('http://localhost:8080/api/posts/' + id)
  }
  getPostById(id:number): Observable<PostModel>{
    return this.http.get<PostModel>('http://localhost:8080/api/posts/' + id)
  }
  savePost(id:number,postModel: any): Observable<any> {
    return this.http.put('http://localhost:8080/api/posts/edit/' + id, postModel);
  }  
}
