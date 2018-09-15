import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import remote from "../services/kinvey-remote-service.service.js";
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { Message } from '../message';

@Component({
  selector: 'app-pm-template2',
  templateUrl: './pm-template2.component.html',
  styleUrls: ['./pm-template2.component.css']
})
export class PmTemplate2Component implements OnInit {
  model: Message;
  Message;
  constructor(private route: ActivatedRoute, private remote: remote, private router: Router, private toastr: ToastrService) {
    this.model = new Message("", "false");
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.remote.GetMessageById(id).subscribe((data)=>{
      
    })

  }

}
