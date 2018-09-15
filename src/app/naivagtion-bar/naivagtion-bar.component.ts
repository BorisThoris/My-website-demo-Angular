import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import remote from "../services/kinvey-remote-service.service.js";
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-naivagtion-bar',
  templateUrl: './naivagtion-bar.component.html',
  styleUrls: ['./naivagtion-bar.component.css']
})
export class NaivagtionBarComponent implements OnInit {
  model: User;
  username: string;
  imgUrl: string;
  newMessages: number;
  messages;
  constructor(private remote: remote, private router: Router, private toastr: ToastrService) {
    this.model = new User(localStorage.getItem("username"), null,localStorage.getItem("picUrl"),null)
    this.username = this.model.username;
    this.imgUrl = this.model.picUrl;
    this.newMessages;
   }
  
  
  Logout(){
    this.remote.logout().subscribe((dataBase)=>{
      console.log("logged out");
      this.toastr.info("Logged out!");
      localStorage.clear();
      this.router.navigate(['/about']);
      if (localStorage.length === 0) {
        console.log("lol, inside if")
        this.remote.login("Guest2", "Guest2").subscribe((data) => {
          this.remote.saveSession(data);
          this.toastr.success("Guest")
        })
      }
    })
  }

  isAuth(){
    if (localStorage.getItem('authtoken') !== null && localStorage.getItem("username")!=="Guest2"){
      this.model = new User(localStorage.getItem("username"), null, localStorage.getItem("picUrl"), null)
      this.username = this.model.username;
      this.imgUrl = this.model.picUrl;
      return true;
    }
    
  }

  isGuest(){
    if (localStorage.getItem("username") === "Guest2") {
      return true;
    }
    else return false;
  }

  isNotGuest(){
    if(localStorage.getItem("username")==="Guest2"){
      return false;
    }
  }

  isAdmin(){
    if(localStorage.getItem("isAdmin")==="Yes"){
      return true;
    }
  }


  isNotAuth(){
    return localStorage .getItem('authtoken') === null;
  }

  ngOnInit() {
    let id = localStorage.getItem("userId")
    this.newMessages=0;
    this.remote.GetAllMessages().subscribe((messages) => {
      for(let index in messages){
        //VARIABLES
        let receiver = messages[index]["receiver"];
        let open = messages[index]["open"]
        //CODE FOR NewMessages
        if(id===receiver && open==="false" ){
        console.log("receiver")
        this.newMessages++;
        }
      }
      this.messages = messages;
    })
  }

  messagesNew(){
    if(this.newMessages===0){
      return false
    } else return true;
  }

}


