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
    this.model = new User(localStorage.getItem("username"), null, localStorage.getItem("picUrl"),null)
    this.username = localStorage.getItem("username");
    this.picurl = localStorage.getItem("profilePic");
    
   
  }
  
  //UPDATE FUNC
  testfunc(){
    console.log(this.model.username);
    this.remote.updateUser(this.model.username, null, localStorage.getItem("userId"), this.model.picUrl).subscribe((UserData) =>
    {
      this.remote.saveSession(UserData);
      this.model = new User(localStorage.getItem("username"), null, localStorage.getItem("picUrl"), null)
      this.username = localStorage.getItem("username");
      this.picurl = localStorage.getItem("profilePic");
      this.toastr.info("User Information Changed!")
      
    });
  }
    
  ngOnInit() {
   
  }
   
  isAdmin(){
    if (localStorage.getItem("isAdmin")!=="undefined"){
      return true;
    }else{
      return false;
    }

  }

}





