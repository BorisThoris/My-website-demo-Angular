import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.css']
})
export class SearchOptionsComponent implements OnInit {
  model:Cat;
  constructor() {
    this.model = new Cat("","",0,null,null,null)
   }
  test(){console.log(this.model)}
  ngOnInit() {
  }

}
