import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'
import { Message } from '../message';
import remote from "../services/kinvey-remote-service.service.js";
import { ToastrService, Toast } from 'ngx-toastr';

@Component({
  selector: 'app-pm-template',
  templateUrl: './pm-template.component.html',
  styleUrls: ['./pm-template.component.css']
})
export class PmTemplateComponent implements OnInit {
  model: Message;
  senderName: string;
  @Input() message: Message;
  @Output() deletedMessage = new EventEmitter<any>();

  constructor(private router: Router, private remote: remote, private toastr: ToastrService) {
    this.model = new Message("", "false");
   }

  ngOnInit() {
    this.model = this.message;
  }

  deleteFunc(){
   this.remote.DeleteMessage(this.model._id).subscribe((data) => {
     this.deletedMessage.emit(this.model);
     this.toastr.info("Съобщение Изтрито!")
   })
  }

  navigate(){
    let id = this.message._id;
    this.router.navigate(["/pm-view/" + id]);
  }
}
