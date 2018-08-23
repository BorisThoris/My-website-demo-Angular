import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import remote from "../services/kinvey-remote-service.service.js";
@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css']
})
export class UserProfileCardComponent implements OnInit {
  @Input() user: User;
  @Output() changedUsers = new EventEmitter<any>();
  constructor(private remote:remote) {
    
  }

  ngOnInit() {
    console.log("lol")
  }

  testFunc(){
    console.log(this.user._id);
    this.remote.DeleteUser(this.user._id).subscribe((data)=>{
      console.log("it worked lol");
      this.changedUsers.emit(this.user);

    })
  }

}
