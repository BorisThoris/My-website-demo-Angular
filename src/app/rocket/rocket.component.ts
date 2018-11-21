import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RocketClass } from '../rocket-class';
@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  @ViewChild('Rocket') Rocket6: ElementRef;
  @ViewChild('TopHalf') TopHalf: ElementRef;
  @ViewChild('BottomHalf') BottomHalf: ElementRef;
  @ViewChild('EngineFlame') EngineFlame: ElementRef;
  @Input() rocket: RocketClass;
  rockets = [];
  fuelStageOne;
  fuelStageTwo;
  thick = 5000;
  
  constructor() { }

  startRocketflying(rocket){
    let fuelOne = parseFloat(rocket.first_stage.fuel_amount_tons);
    let fuelTwo = parseFloat(rocket.second_stage.fuel_amount_tons);
    this.fuelStageOne = fuelOne;
    this.fuelStageTwo = fuelTwo;

    
    var c = this.fuelStageOne;
    
    
    var t = setInterval(() => { this.buringFuel(this.fuelStageOne, this.fuelStageTwo, this.thick, t); }, 1000);
    
  }

  buringFuel(c, b, thick , t){ 
    if(this.fuelStageOne>0){
     
      
      this.fuelStageOne--;

      /* MOVING ROCKET */
      
      this.Rocket6.nativeElement.style.top = thick.toString() + "%"
      let randomSad = Math.floor(Math.random() * 10);  
      this.thick = this.thick - randomSad;
    }
    else if(this.fuelStageOne<=0 && this.fuelStageTwo > 0){
      
      this.BottomHalf.nativeElement.setAttribute("class", "destroyed");
      this.EngineFlame.nativeElement.setAttribute("class", "stage2");
      
      this.fuelStageTwo--;

      /* MOVING ROCKET */
      this.Rocket6.nativeElement.style.top = thick.toString() + "%"
      let randomSad = Math.floor(Math.random() * 10);
      this.thick = this.thick - randomSad;
      
    }
    else {
     
      this.Rocket6.nativeElement.setAttribute("class", "destroyed");
      
      
      this.EngineFlame.nativeElement.style.display = "none";
     
      clearInterval(t);

      /* MOVING ROCKET */
      this.Rocket6.nativeElement.style.top = thick.toString() + "%"
      let randomSad = Math.floor(Math.random() * 10);
      this.thick = this.thick - randomSad;
    }
    
  
  }


  ngOnInit() {
    this.startRocketflying(this.rocket)
    
  }



}


