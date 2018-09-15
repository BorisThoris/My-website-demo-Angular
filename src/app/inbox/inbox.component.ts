import { Component, OnInit } from '@angular/core';
import remote from "../services/kinvey-remote-service.service.js";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  messages
  constructor(private remote: remote) { }

  ngOnInit() {
    this.remote.GetAllMessages().subscribe((data) => {
      let tempArr = [];
      let length = Object.keys(data).length
      for (let i = length-1; i >= 0; i--){
        console.log(data[i]);
        if(localStorage.getItem("userId") === data[i].receiver){
          tempArr.push(data[i])
        }
        this.messages = tempArr;
      }     
    })
  }

  getMessegesAgain(){
    this.ngOnInit();
  }

}
