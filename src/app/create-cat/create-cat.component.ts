import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import remote from "../services/kinvey-remote-service.service.js";
//public name: string,
//public breed: string,
//public age: number,
//public contactNumber: number,
//public information: string,
//public imgUrl: string,




@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css']
})
export class CreateCatComponent implements OnInit {
  model: Cat;
  url: String;
  
  constructor(private remote:remote) {
    
    this.model = new Cat("", "", 0, 0, "","https://cdn.pixabay.com/photo/2016/08/10/14/39/cat-1583459__340.png")
    this.url = this.model.imgUrl;
    
    
   }

  test(){
    //VARIABLES
    let name = this.model.name;
    let age = this.model.age;
    let contactNumber = this.model.contactNumber;
    let imgUrl = this.model.imgUrl
    let breed = this.model.breed;
    let information = this.model.information;

    //VALIDATION
    if(name === "" || breed === "" || age <= 0 || contactNumber <0 || information === "" || imgUrl === ""){
      console.log("all fields are required");
    }if(name.length>16){
      console.log("name needs to be shorter");
    }if(information.length>380){
      console.log("information should be less")}
    //CAT CREATION  
    else{
      console.log("to create");
      this.remote.CreateCat(name,breed,age,contactNumber,information,imgUrl).subscribe((data) => {
        console.log("it worked");
      });
    }
  }



  ngOnInit() {
  }

}
