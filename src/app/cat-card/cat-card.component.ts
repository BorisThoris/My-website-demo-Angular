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
    picUrl;
    index;
    information;
    
    constructor(private router: Router) {
   
    }

  ngOnInit() {
    this.index=1;
    this.picUrl=this.cat.imgUrl;
  }
d
  loadInfo(){
    this.information = this.cat.information;
    let id = this.cat._id;
    this.router.navigate(['/view-cat/' + id])
  }
  
  isCastrated(){
    if(this.cat.castrated){
      return true;
    }
  }

  isVaccinated() {
    if (this.cat.vaccinated) {
      return true;
    }
  }

  isCreator(){
    let user = localStorage.getItem("userId");
    let catCreator = this.cat._acl.creator;
    if(user===catCreator){
      return(true);
    }
  }


  //SLIDER
  funcMove(input){
    let index = this.index;
    if(input==='left'){
        func: {
          let index = this.index;
          if (index === 1) {
            this.index = 4;
            break func;
          }
          this.index--;
        }
      }
    else if(input==="right"){
      func: {
        let index = this.index;
        if (index === 4) {
          this.index = 1;
          break func;
        }
        this.index++;
      }
    }
      
    
  }
  

  //CONDITIONS
  is1() {
    let index = this.index;
    if (index === 1) {
      return true;
    }
  }

  is2() {
    let index = this.index;
    if (index === 2) {
      return true;
    }
  }

  is3() {
    let index = this.index;
    if (index === 3) {
      return true;
    }
  }

  is4() {
    let index = this.index;
    if (index === 4) {
      return true;
    }
  }

}
