import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import remote from "../services/kinvey-remote-service.service.js";
import { Router } from '@angular/router'

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
   constructor(private remote:remote, private router: Router) {this.model = new User("","",null,null);}
   
   //FUNCTIONS
   
   testFunc(){
     
    //VALIDATION
      if(this.model.username === "" || this.model.password === ""){
          console.log("fields should not be empty");}
    //LOGIN
      else{
        this.remote.login(this.model.username, this.model.password).subscribe((userData) =>
        {
          console.log("success");
          this.remote.saveSession(userData);
          console.log(sessionStorage)
          this.router.navigate(['/about'])
        });
      }
    }
    
    
  submit():void{
  } 
  ngOnInit(){
  }
  ngOnChange(){
  }
  
    

   
    

  
}
