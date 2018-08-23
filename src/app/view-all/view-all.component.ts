import { Component, OnInit, Input, Output } from '@angular/core';
import { Cat } from '../cat';
import remote from "../services/kinvey-remote-service.service.js";
import { EventEmitter } from 'events';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})

export class ViewAllComponent implements OnInit {
  cats
  
  constructor(private remote: remote) { }
  


  ngOnInit() {
    this.remote.GetAllCats().subscribe((data)=>{
      this.cats = data;
      console.log(this.cats);
      console.log(this.cats);
    })
  }

}
