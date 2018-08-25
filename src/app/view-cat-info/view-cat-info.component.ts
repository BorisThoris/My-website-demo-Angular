import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import remote from "../services/kinvey-remote-service.service.js";
import { Cat } from '../cat';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-cat-info',
  templateUrl: './view-cat-info.component.html',
  styleUrls: ['./view-cat-info.component.css']
})
export class ViewCatInfoComponent implements OnInit {
  model: Cat;
  Cat;

  constructor(private route: ActivatedRoute, private remote: remote, private router: Router, private toastr: ToastrService) {
    this.model = new Cat("", "", 0, 0, "", "", "","");
   }

    ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    //UGLY PASSING DATA FROM SERVER
    this.remote.GetCatById(id).subscribe((data)=>{
      this.Cat = data; this.model.breed = this.Cat.breed; 
      this.model.name = this.Cat.name; this.model.contactNumber = this.Cat.contactNumber;
      this.model.age = this.Cat.age; this.model.information = this.Cat.information; 
      this.model.imgUrl = this.Cat.imgUrl;
      this.model._acl = this.Cat._acl;
    })
  }
      
    isAdmin(){
      if(sessionStorage.getItem("isAdmin")==="Yes"){
        return(true);
      }
    }
    
    //DELETING CAT
    deleteFunc()
    {
      
    //VALIDATION
    let acl = this.model._acl.creator;
    let userId = sessionStorage.getItem("userId");
    //DELETE REQUEST
      if(this.isAdmin() || acl === userId)
        {
          const id = this.route.snapshot.paramMap.get('id');
          this.remote.deleteCat(id).subscribe((data)=>{
            this.toastr.info("Cat Deleted!")
            this.router.navigate(["/viewAll"])
          }, (error: any) => {
            this.toastr.error("Creation Error");
          })
        }
      else (this.toastr.error("Not Admin or Creator"))
    } 
    
    //UPDATING CAT
    testFunc(){
      //VALIDATION
      let acl = this.model._acl.creator;
      let userId = sessionStorage.getItem("userId");
      const id = this.route.snapshot.paramMap.get('id');
      let name = this.model.name;
      let breed = this.model.breed;
      let contactNumber = this.model.contactNumber;
      let age = this.model.age;
      let information = this.model.information;
      let imgUrl = this.model.imgUrl;
      
      
      if (name === "" || breed === "" || age <= 0 || contactNumber < 0 || information === "" || imgUrl === "") {
        this.toastr.error("Fields Should Not Be Empty!");
      } else if (name.length > 16) {
        this.toastr.error("Name Should Be Shorter!");
      } else if (information.length > 380) {
        this.toastr.error("Information Should Be Less!");
      } else if(breed.length>16){
        this.toastr.error("Breed Length should be shorter!")
      }
      else if (age > 17) {
        this.toastr.error("Cat Should Be Alive!");
      }
      
      else if(this.isAdmin() || acl===userId)
       {
         //UPDATE REQUEST
         this.remote.UpdateCat(name,breed,age,contactNumber,information,imgUrl, id).subscribe((data)=>{
         this.toastr.info("Cat Updated!")
          }, (error: any) => {
           this.toastr.error("Creation Error");})} 
      else{
         this.toastr.error("Not Admin or Creator")}
        }
      }
 
       
      
        

        
        
      
            
            
            
      
      

      
        
        
    
    
    

    



