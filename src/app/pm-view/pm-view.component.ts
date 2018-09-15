import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import remote from "../services/kinvey-remote-service.service.js";
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { Message } from '../message';

@Component({
  selector: 'app-pm-view',
  templateUrl: './pm-view.component.html',
  styleUrls: ['./pm-view.component.css']
})
export class PmViewComponent implements OnInit {
  model: Message;
  Message;

  constructor(private route: ActivatedRoute, private remote: remote, private router: Router, private toastr: ToastrService) {
    this.model = new Message("", "false", "", "");
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.remote.GetMessageById(id).subscribe((data)=>{
      //catName, senderName, open, sender, receiver, message, madeDate
      //VARIABLES
      let open = data['open'];
      let catName = data['catName'];
      let senderName = data['senderName'];
      let sender = data['sender'];
      let receiver = data['receiver'];
      let message = data['message'];
      let madeDate = data['madeDate'];
      let id = this.model._id = data['_id'];
      
      //UPDATING MESSAGE
      if(open==="false"){
        open="true";
        this.remote.UpdateMessage(catName, senderName, 'true', sender, receiver, message, madeDate, id).subscribe((data) => {
          this.toastr.info("Съобщение Отворено!")
        });
      }
      
    });
  }

}
