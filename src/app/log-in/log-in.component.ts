import { Component, OnInit } from '@angular/core';
import { User } from '../user';

// public id:
// public userName:
// public password:
// public picUrl:
 
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  
})
export class LogInComponent implements OnInit {
   model: User;
  constructor() {
    this.model = new User("","")
    
  }
    
   submit(): void{
     console.log(this.model);
   } 

    

  ngOnInit() {
    
  }
  ngOnChange(){
    console.log(this.model);
  }

  
}
