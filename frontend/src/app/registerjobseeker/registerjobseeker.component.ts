import { Component, OnInit } from '@angular/core';
import { Jobseeker } from 'src/Jobseeker';
import { JobseekerService } from '../jobseeker.service';

@Component({
  selector: 'app-registerjobseeker',
  templateUrl: './registerjobseeker.component.html',
  styleUrls: ['./registerjobseeker.component.css']
})
export class RegisterjobseekerComponent implements OnInit {

  jobseeker:Jobseeker=new Jobseeker();
  submitted=false;
  constructor(private regJobseekerService:JobseekerService) { }

  ngOnInit() {
  }
  newJobseeker():void{
    this.submitted=false;
    this.jobseeker=new Jobseeker();
  }

  save(){
    this.regJobseekerService.createJobseeker(this.jobseeker)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.jobseeker=new Jobseeker();
  }
  OnSubmit(){
    this.submitted=true;
    this.save();
  }
}
