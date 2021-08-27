import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobseekerService {

  private baseUrl="http://localhost:49569/api/jobseeker";

  constructor(private http:HttpClient) { }

  getAllEmployer():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`);
  }
  
  createJobseeker(jobseeker:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`,jobseeker)
  }
  getEmployerByCountryAndField(country:string,field:string)
  {
    return this.http.get(`${this.baseUrl}/${country}/${field}`);
  }
}
