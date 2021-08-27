import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { EmployerComponent } from './employer/employer.component';
import { RegisterjobseekerComponent } from './registerjobseeker/registerjobseeker.component';
import { RegisteremployerComponent } from './registeremployer/registeremployer.component';
import { EmployerbycountryandfieldComponent } from './employerbycountryandfield/employerbycountryandfield.component';
import { RegisterdriveComponent } from './registerdrive/registerdrive.component';


const routes: Routes = [
  {path:'userLogin',component:LoginComponent},
  {path:'jobseeker',component:JobseekerComponent},
  {path:'employer',component:EmployerComponent,
  children:
  [
    {
      path:"registerdrive",component:RegisterdriveComponent
      
    }]},
  {path:'registerJobseeker',component:RegisterjobseekerComponent},
  {path:'registerEmployer',component:RegisteremployerComponent},
  {path:'empbycountryandfield',component:EmployerbycountryandfieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
