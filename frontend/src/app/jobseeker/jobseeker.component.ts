import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../jobseeker.service';
import { Employer } from 'src/Employer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {
  /*ngOnInit(): void {
  this.flag=false;  
  }*/

  employerList:Observable<Employer[]>;
  //employerbycountryandname:Observable<Employer[]>; not allowing 
  employerbycountryandname:Observable<any>;
  employer:Employer;
  country:any;
  field:any;
  flag:boolean;

  constructor(private jsService:JobseekerService,public router:Router){};

  ngOnInit() {
    this.flag=false;
    this.employerList=this.jsService.getAllEmployer();
    if(this.employerList!=null)
    {   
      alert("data_available");
      console.log(this.employerList);  
    }
  }
  searchEmployer()
  {
    this.employerbycountryandname=this.jsService.getEmployerByCountryAndField(this.country,this.field);
    if(this.employerbycountryandname!=null){
      alert("data available");
      this.flag=true;
    }
  }
  onSubmit(){

    this.searchEmployer();
  //  this.router.navigate(['empbycountryandfield']);
    
  }

}
