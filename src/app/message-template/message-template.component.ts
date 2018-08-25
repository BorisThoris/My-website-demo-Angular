import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Message } from '../message';
import remote from "../services/kinvey-remote-service.service.js";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-message-template',
  templateUrl: './message-template.component.html',
  styleUrls: ['./message-template.component.css']
})
export class MessageTemplateComponent implements OnInit {
  @Input() message: Message;
  @Output() changedMessages = new EventEmitter<any>();
  constructor(private remote: remote, private toastr: ToastrService) { 
    
  }

  deleteFunc(){
    console.log("delete")
    let id = this.message._id;
    this.remote.DeleteMessageById(id).subscribe((data)=>{
      this.toastr.success("Message Deleted")
      this.changedMessages.emit(this.message);
    }, (error)=>{this.toastr.error("Failed")});
  }

  isAuth(){
    if(sessionStorage.getItem("isAdmin")==="Yes"){
      return(true);
    }
  }

  ngOnInit() {
    console.log(this.message._id);
    
  }

}
