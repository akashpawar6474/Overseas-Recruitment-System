import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,Subscription, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn=new BehaviorSubject<boolean>(false);
  currentLoginState=this.loggedIn.asObservable();

  private jobseeker=new BehaviorSubject<boolean>(false);
  jobseekerState=this.jobseeker.asObservable();

  private employer=new BehaviorSubject<boolean>(false);
  employerState=this.employer.asObservable();

  private admin=new BehaviorSubject<boolean>(false);
  adminState=this.admin.asObservable();
  
  private baseUrl='http://localhost:49569/api/login';

  constructor(private http:HttpClient) { }

validateUser(value:any):Observable<Object>
{
  return this.http.post(`${this.baseUrl}`,value, {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
  });
}

changecurrentLoginState(state:boolean)
{
  this.loggedIn.next(state);
}
changeJobseekerState(state:boolean)
{
  this.jobseeker.next(state);
}
changeEmployerState(state:boolean)
{
  this.employer.next(state);
}
changeAdminState(state:boolean)
{
  this.admin.next(state);
}
}
