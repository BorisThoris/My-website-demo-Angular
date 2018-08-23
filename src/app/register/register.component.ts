import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import remote from "../services/kinvey-remote-service.service.js";
import { Router } from '@angular/router'
import auth from "../services/auth-service.service.js";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';


 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export  class RegisterComponent implements OnInit {
  model:User;
  constructor (private remote:remote, private router: Router) {this.model = new User('','',null,'')}

  
  //FUNCTIONS
  
  testFunc(){
    console.log(this.model.password);
        //CHECK1
        if(this.model.username=="" || this.model.password=="" || this.model.repeatPassword==""){
        console.log("Fields snould not be empty!")}
        //CHECK2
        else if(this.model.repeatPassword!=this.model.password){
        console.log("passwords dont match")}
        //REG
        else{
        this.remote.register(this.model.username, this.model.password, null).subscribe();
        //NAVIGATE
        this.router.navigate(["/login"])
      }
  }
  
  onSubmit(): void {
  }
  ngOnInit() {
  }
    
    
    
    
    
  



}
    
    
     
   
   

  
