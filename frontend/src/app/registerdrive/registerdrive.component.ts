import { Component, OnInit } from '@angular/core';
import { Drives } from 'src/Drives';
import { EmployerService } from '../employer.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-registerdrive',
  templateUrl: './registerdrive.component.html',
  styleUrls: ['./registerdrive.component.css']
})
export class RegisterdriveComponent implements OnInit {

  drive:Drives=new Drives();
  submitted:boolean=false;
  
  constructor(private regDriveService:EmployerService) { }

  ngOnInit() {
  }
  newDrives()
  {
    this.submitted=false;
    this.drive=new Drives();
  }
  onSubmit(){
    this.submitted=true;
    this.save();
  }
  save(){
    let username=sessionStorage.getItem("employer");
    this.regDriveService.createNewDrive(username,this.drive).subscribe(data=>console.log(data),error=>console.log(error));
    this.drive=new Drives();
  }
}
