import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import remote from "../services/kinvey-remote-service.service.js";
import { Router } from '@angular/router'

@Component({
  selector: 'app-naivagtion-bar',
  templateUrl: './naivagtion-bar.component.html',
  styleUrls: ['./naivagtion-bar.component.css']
})
export class NaivagtionBarComponent implements OnInit {
  model: User;
  username: string;
  imgUrl: string;

  constructor(private remote: remote, private router: Router) {
    this.model = new User(sessionStorage.getItem("username"), null,sessionStorage.getItem("picUrl"),null)
    this.username = this.model.username;
    this.imgUrl = this.model.picUrl;
   }
  
  
  Logout(){
    this.remote.logout().subscribe((dataBase)=>{
      console.log("logged out");
      sessionStorage.clear();
      this.router.navigate(['/about']);
      
    })
  }

  isAuth(){
    if (sessionStorage.getItem('authtoken') !== null){
      this.model = new User(sessionStorage.getItem("username"), null, sessionStorage.getItem("picUrl"), null)
      this.username = this.model.username;
      this.imgUrl = this.model.picUrl;
    }
    return sessionStorage.getItem('authtoken') !== null;
  }

  isNotAuth(){
    return sessionStorage.getItem('authtoken') === null;
  }

  ngOnInit() {
    
  }

}


