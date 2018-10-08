import { Component, OnInit, Input, Output } from '@angular/core';
import { Cat } from '../cat';
import remote from "../services/kinvey-remote-service.service.js";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  cats
  searchOptions: object;
  
  constructor(private remote: remote) { }
 
  receiveSearch($event) {
    this.searchOptions = $event
    console.log(this.searchOptions);
  }

  numberCats($event){
    console.log($event);
  }
  
  ngOnInit() {
    this.remote.GetAllCats().subscribe((data)=>{
      this.cats = data;
      console.log(this.cats);
      console.log(this.cats);
    })
  }

}
