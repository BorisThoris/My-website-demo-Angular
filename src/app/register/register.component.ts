import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import remote from "../services/kinvey-remote-service.service.js";
import { Router } from '@angular/router'
import auth from "../services/auth-service.service.js";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';


 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export  class RegisterComponent implements OnInit {
  model:User;
  constructor (private remote:remote, private router: Router, private toastr: ToastrService) {this.model = new User('','',null,'')}

  
  //FUNCTIONS
  
  testFunc(){
    console.log(this.model.password);
        //CHECK1
        if(this.model.username=="" || this.model.password=="" || this.model.repeatPassword==""){
        this.toastr.error("Fields Should Not Be Empty!")}
        //CHECK2
        else if(this.model.repeatPassword!=this.model.password){
          this.toastr.error("Passwords Should Match!")}
        //REG
        else{
        this.toastr.info("Registering!")
        this.remote.register(this.model.username, this.model.password, null).subscribe((Data)=>{
          this.toastr.success("Registered!");
          this.router.navigate(["/login"])
        }, (error:any)=>{
          this.toastr.error("Registration Error");
        });
      }
  }
          
  
  onSubmit(): void {
  }
  ngOnInit() {
  }
    
    
    
    
    
  



}
    
    
     
   
   

  
