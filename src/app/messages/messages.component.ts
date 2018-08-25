import { Component, OnInit } from '@angular/core';
import remote from "../services/kinvey-remote-service.service.js";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  
  messages

  constructor(private remote: remote) { }

  ngOnInit() {
    this.remote.GetAllMessages().subscribe((data) => {
      
      this.messages = data;
     
    })
  }

  getMessagesAgain(){
    this.remote.GetAllMessages().subscribe((data) => {
      this.messages = data;
      
      
    })
  }
      
}


 