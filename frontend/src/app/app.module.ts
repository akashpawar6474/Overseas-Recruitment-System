import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { EmployerComponent } from './employer/employer.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { JobseekerService } from './jobseeker.service';
import { RegisterjobseekerComponent } from './registerjobseeker/registerjobseeker.component';
import { RegisteremployerComponent } from './registeremployer/registeremployer.component';
import { EmployerService } from './employer.service';
import { EmployerbycountryandfieldComponent } from './employerbycountryandfield/employerbycountryandfield.component';
import { RegisterdriveComponent } from './registerdrive/registerdrive.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobseekerComponent,
    EmployerComponent,
    RegisterjobseekerComponent,
    RegisteremployerComponent,
    EmployerbycountryandfieldComponent,
    RegisterdriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [LoginService,JobseekerService,EmployerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
