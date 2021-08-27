import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mvc';
  loggedIn:boolean;
  jobseeker:boolean;
  employer:boolean;
  admin:boolean;


  constructor(private loginservice:LoginService){}

reload()
{
  this.loginservice.currentLoginState.subscribe(data=>(setTimeout(()=>this.loggedIn=data as boolean,0)));
  this.loginservice.jobseekerState.subscribe(data=>(setTimeout(()=>this.jobseeker=data as boolean,0)));
  this.loginservice.employerState.subscribe(data=>(setTimeout(()=>this.employer=data as boolean,0)));
  this.loginservice.adminState.subscribe(data=>(setTimeout(()=>this.admin=data as boolean,0)));
}

ngOnInit()
{
  this.reload();
  this.loginservice.jobseekerState.subscribe(result=>this.jobseeker=result);
  this.loginservice.employerState.subscribe(result=>this.employer=result);
  this.loginservice.adminState.subscribe(result=>this.admin=result);
}
}
