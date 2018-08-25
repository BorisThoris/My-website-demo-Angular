import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClientModule } from '@angular/common/http';
import remote from "../services/kinvey-remote-service.service.js"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  model:User;
  username:String;
  picurl:String;
  
  constructor(private remote: remote, private toastr: ToastrService ){
    this.model = new User(sessionStorage.getItem("username"), null, sessionStorage.getItem("picUrl"),null)
    this.username= sessionStorage.getItem("username");
    this.picurl = sessionStorage.getItem("profilePic");
    
   
  }
  
  //UPDATE FUNC
  testfunc(){
    console.log(this.model.username);
    this.remote.updateUser(this.model.username, null, sessionStorage.getItem("userId"), this.model.picUrl).subscribe((UserData) =>
    {
      this.remote.saveSession(UserData);
      this.model = new User(sessionStorage.getItem("username"), null, sessionStorage.getItem("picUrl"), null)
      this.username = sessionStorage.getItem("username");
      this.picurl = sessionStorage.getItem("profilePic");
      this.toastr.info("User Information Changed!")
      
    });
  }
    
  ngOnInit() {
   
  }
   
  isAdmin(){
    if(sessionStorage.getItem("isAdmin")!=="undefined"){
      return true;
    }else{
      return false;
    }

  }

}





