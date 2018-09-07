import { Component, OnInit } from '@angular/core';
import remote from "../services/kinvey-remote-service.service.js";
import { Stuff } from '../stuff';
import { getLocaleFirstDayOfWeek } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  //PIC1
  pic1: "";
  pic1Adress: "";
  //PIC2
  pic2: "";
  pic2Adress: "";
  //PIC3
  pic3: "";
  pic3Adress: "";
  //PIC4
  pic4: "";
  pic4Adress:"";
  constructor(private remote: remote){
    
  }

  
  ngOnInit() {
    console.log("loldsds");
    if(sessionStorage.length===0)
      {
        console.log("lol, inside if")
        this.remote.login("Guest2", "Guest2").subscribe((data)=>{
          this.remote.saveSession(data); this.getCats();})
        }
        else
        {
         this.getCats() 
        }
      }
       

    getCats() {
      this.remote.GetAllCats().subscribe((data) => {
        let stuff2 = data;
        let length = Object.keys(stuff2).length;
        //PIC1
        this.pic1 = stuff2[length - 1].imgUrl;
        this.pic1Adress = stuff2[length - 1]._id;
        //PIC2
        this.pic2 = stuff2[length - 2].imgUrl;
        this.pic2Adress = stuff2[length - 2]._id;
        //PIC3
        this.pic3 = stuff2[length - 3].imgUrl;
        this.pic3Adress = stuff2[length - 3]._id;
        //PIC4
        this.pic4 = stuff2[length - 4].imgUrl;
        this.pic4Adress = stuff2[length - 4]._id;
        console.log(this.pic1Adress);
      })
    }
  }

          
         

          
      
  

      