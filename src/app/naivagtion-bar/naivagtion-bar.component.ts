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

  constructor(private remote: remote, private router: Router, private toastr: ToastrService) {
    this.model = new User(sessionStorage.getItem("username"), null,sessionStorage.getItem("picUrl"),null)
    this.username = this.model.username;
    this.imgUrl = this.model.picUrl;
   }
  
  
  Logout(){
    this.remote.logout().subscribe((dataBase)=>{
      console.log("logged out");
      this.toastr.info("Logged out!");
      sessionStorage.clear();
      this.router.navigate(['/about']);
      if (sessionStorage.length === 0) {
        console.log("lol, inside if")
        this.remote.login("Guest2", "Guest2").subscribe((data) => {
          this.remote.saveSession(data);
          this.toastr.success("Guest")
        })
      }
    })
  }

  isAuth(){
    if (sessionStorage.getItem('authtoken') !== null && sessionStorage.getItem("username")!=="Guest2"){
      this.model = new User(sessionStorage.getItem("username"), null, sessionStorage.getItem("picUrl"), null)
      this.username = this.model.username;
      this.imgUrl = this.model.picUrl;
      return true;
    }
    
  }

  isGuest(){
    if (sessionStorage.getItem("username") === "Guest2") {
      return true;
    }
    else return false;
  }

  isNotGuest(){
    if(sessionStorage.getItem("username")==="Guest2"){
      return false;
    }
  }

  isAdmin(){
    if(sessionStorage.getItem("isAdmin")==="Yes"){
      return true;
    }
  }


  isNotAuth(){
    return sessionStorage.getItem('authtoken') === null;
  }

  ngOnInit() {
    
  }

}


