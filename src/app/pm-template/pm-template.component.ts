import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pm-template',
  templateUrl: './pm-template.component.html',
  styleUrls: ['./pm-template.component.css']
})
export class PmTemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deleteFunc(){
    console.log("Delete")
  }

  navigate(){
    this.router.navigate(["/about"])
  }
}
