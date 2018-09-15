import { Component, OnInit, Input, Output } from '@angular/core';
import { Cat } from '../cat';
import remote from "../services/kinvey-remote-service.service.js";
import { EventEmitter } from 'events';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  @Input() cat: Cat;
 
    
    constructor(private router: Router) {
   
    }

  ngOnInit() {
  }
d
  loadInfo(){
    let id = this.cat._id;
    this.router.navigate(['/view-cat/' + id])
  }
  
  isCreator(){
    let user = localStorage.getItem("userId");
    let catCreator = this.cat._acl.creator;
    if(user===catCreator){
      return(true);
    }
  }

}
