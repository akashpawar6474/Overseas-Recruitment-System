import { Component, OnInit, Input } from '@angular/core';
import { Employer } from 'src/Employer';

@Component({
  selector: 'app-employerbycountryandfield',
  templateUrl: './employerbycountryandfield.component.html',
  styleUrls: ['./employerbycountryandfield.component.css']
})
export class EmployerbycountryandfieldComponent implements OnInit {

  @Input() employer:Employer;
  constructor() { }

  ngOnInit() {
  }

}
