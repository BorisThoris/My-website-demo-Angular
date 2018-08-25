import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import remote from "../services/kinvey-remote-service.service.js";
import { ToastrService, Toast } from 'ngx-toastr';
@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css']
})
export class UserProfileCardComponent implements OnInit {
  @Input() user: User;
  @Output() changedUsers = new EventEmitter<any>();
  constructor(private remote:remote, private toastr: ToastrService) {
    
  }
  
  
  testFunc(){
    if(sessionStorage.getItem("isAdmin")==="Yes"){
      this.remote.DeleteUser(this.user._id).subscribe((data)=>{
        this.changedUsers.emit(this.user);
        this.toastr.info("User Deleted")
      })
    }
    else{this.toastr.error("Not Admin")}
  }
  
  IsDisabled(){
    if (this.user._kmd.status){
      return false;
    }
    else return true;
  }

  ngOnInit() {
  }
}

      
  


      



