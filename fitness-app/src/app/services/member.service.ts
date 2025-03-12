import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseUrl}/listmembers`);
  }

  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.baseUrl}/addmembers`, member);
  }

  deleteMember(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.baseUrl}/deletemember`, member);
  }

  editMember(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.baseUrl}/editmember`, member);
  }
}
