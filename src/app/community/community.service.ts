import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunityModel, CommunityModelEdit } from './community-response';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private http: HttpClient) { }

  createCommunity(communityModel: CommunityModelEdit): Observable<CommunityModelEdit>{
    return this.http.post<CommunityModelEdit>('http://localhost:8080/api/community/create', 
    communityModel);
  }
  
  getCommunityList(): Observable<CommunityModel[]> {
    return this.http.get<CommunityModel[]>('http://localhost:8080/api/community');
  }

  getCommunityById(id: number): Observable<CommunityModel>{
    return this.http.get<CommunityModel>('http://localhost:8080/api/community/' + id)
  }

  saveCommunity(id:number, communityModel: any): Observable<any> {
    return this.http.put('http://localhost:8080/api/community/edit/' + id, communityModel);
  }  
}
