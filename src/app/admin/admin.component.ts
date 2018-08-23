import { Component, OnInit } from '@angular/core';
import remote from "../services/kinvey-remote-service.service.js";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users

  constructor(private remote: remote) { }

  ngOnInit() {
    this.remote.GetAllUsers().subscribe((data)=>{
      this.users = data;
      console.log(data);
    })
  }

}
 