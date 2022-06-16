import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vote } from '../post/vote-button/vote';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(private http: HttpClient) { }

  reaction(vote: vote):Observable<Object>{
    return this.http.post('http://localhost:8080/api/reaction', vote);

  }
}
