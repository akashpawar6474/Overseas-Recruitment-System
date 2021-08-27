import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { Employer } from 'src/Employer';

@Component({
  selector: 'app-registeremployer',
  templateUrl: './registeremployer.component.html',
  styleUrls: ['./registeremployer.component.css']
})
export class RegisteremployerComponent implements OnInit {

    employer:Employer=new Employer();
    
    submitted=false;
  constructor(private regEmpService:EmployerService) { }

  ngOnInit() {
  }

  newEmployer():void{
    this.submitted=false;
    this.employer=new Employer();
  }
  save(){
    this.regEmpService.createEmployer(this.employer)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.employer=new Employer();
  }
  onSubmit(){
    this.submitted=true;
    this.save();
  }

}
