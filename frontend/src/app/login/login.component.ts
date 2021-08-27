import { Component, OnInit } from '@angular/core';
import { User } from 'src/User';
import { LoginService } from '../login.service';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loggedIn:boolean;
 logindetails:User=new User();
  validUser:User=new User();
  message:string;

  constructor(private loginservice:LoginService) { }



  ngOnInit() {
    this.loginservice.currentLoginState.subscribe(result=>this.loggedIn=result);
  }

  userLogin()
  {
    this.loginservice.validateUser({username:this.logindetails.username,password:this.logindetails.password})
    .subscribe(data=>this.validUser=data as User);
    
    console.log(this.validUser);

    if(this.validUser.EmailId!=null)
    {
      this.loginservice.changecurrentLoginState(true);
      if(this.validUser.Role=="admin")
      {
       this.loginservice.changeAdminState(true);
       sessionStorage.setItem("admin",this.validUser.username);
      }
      if(this.validUser.Role=="jobseeker")
      {
       this.loginservice.changeJobseekerState(true);
       sessionStorage.setItem("jobseeker",this.validUser.username);
      }
      if(this.validUser.Role=="employer")
      {
        this.loginservice.changeEmployerState(true);
        sessionStorage.setItem("employer",this.validUser.username);
      }
    }
    else
    {
      this.message="failed login";
    }
  }
}
