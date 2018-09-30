import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Cat } from '../cat';
@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.css']
})
export class SearchOptionsComponent implements OnInit {
  model:Cat;
  options: object;
  @Output() searchEvent = new EventEmitter<object>();

  //CONSTRUCTOR
  constructor() {
    this.model = new Cat("","",0,null,null,null, null, null, null)
  }
  
  
  
  //FUNCTIONS
  test(){
    console.log("1");
    this.options = this.model;
    this.searchEvent.emit(this.options);
  }
  
  ngOnInit(){
  }

}
