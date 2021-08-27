import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
   
  private baseUrl='http://localhost:7070/mcps/employer';
  private basedUrl='http://localhost:7070/mcps/employer/drive'
  constructor(private http:HttpClient) { }
  

  createEmployer(employer:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`,employer);
  }
  createNewDrive(username:string,drive:Object):Observable<Object>
  {
    return this.http.post(`${this.basedUrl}/${username}`,drive);
  }
}
