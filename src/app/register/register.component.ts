import { Component, OnInit } from '@angular/core';

import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: User;
  constructor() { 
   this.model = new User()

  }
  
  ngOnInit() {
  }

}
