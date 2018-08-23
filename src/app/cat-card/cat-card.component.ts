import { Component, OnInit, Input, Output } from '@angular/core';
import { Cat } from '../cat';
import remote from "../services/kinvey-remote-service.service.js";
import { EventEmitter } from 'events';
@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  @Input() cat: Cat;
 
    
    constructor() {
   
    }

  ngOnInit() {
    console.log("lol");
    
  }

}
