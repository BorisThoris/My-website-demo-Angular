import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RocketClass } from '../rocket-class';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
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
  @Input() maxFuel: number;
  rockets = [];
  fuelStageOne;
  fuelStageTwo;
  thick;
  fuel;
  
  constructor() { }

  startRocketflying(rocket){
    let fuelOne = parseInt(rocket.first_stage.fuel_amount_tons);
    let fuelTwo = parseInt(rocket.second_stage.fuel_amount_tons);
    this.thick = this.maxFuel + 99900;
    this.fuelStageOne = fuelOne;
    this.fuelStageTwo = fuelTwo;
    this.maxFuel = this.maxFuel -1000;
    
    
    // ADJUST THE LAST VALUE FOR SPEED/ 1000 = 1 SECOND //
    var t = setInterval(() => { this.buringFuel(this.fuelStageOne, this.fuelStageTwo, this.thick, this.maxFuel, t); }, 20);
    window.scrollTo(0, 120000);
  }

  buringFuel(c, b, thick, maxFuel , t){ 
    this.fuel = Math.floor(this.fuelStageOne + this.fuelStageTwo) ;
    this.maxFuel--;

    console.log(this.maxFuel);
    if(this.maxFuel = 0){
      window.alert("complete");
    }
    if(this.fuelStageOne>0){
     
      console.log(this.fuelStageOne);
      this.fuelStageOne--;

      /* MOVING ROCKET */
      
      this.Rocket6.nativeElement.style.top = this.thick.toString() + "px"
      
      let randomSad = (Math.random() * 20);  
      this.thick = this.thick - randomSad;
    
    }
    else if(this.fuelStageOne<=0 && this.fuelStageTwo > 0){
      
      this.BottomHalf.nativeElement.setAttribute("class", "destroyed");
      this.EngineFlame.nativeElement.setAttribute("class", "stage2");
      
      this.fuelStageTwo--;

      /* MOVING ROCKET */
      this.Rocket6.nativeElement.style.top = this.thick.toString() + "px"
      let randomSad = (Math.random() * 4);
      this.thick = this.thick - randomSad;
      console.log(this.fuelStageTwo)
      
    }
    else {
     
      this.Rocket6.nativeElement.setAttribute("class", "destroyed");
      
      
    
     
      clearInterval(t);

      /* MOVING ROCKET */
      this.Rocket6.nativeElement.style.top = this.thick.toString() + "px"
      let randomSad = (Math.random() * 4);
      this.thick = this.thick - randomSad;
      
    }
    
  
  }

  firstStage(){
    if(this.fuelStageOne>0){
      return true;
    }
  }
  
  secondStage(){
    if(this.fuelStageTwo>0 && this.fuelStageOne<=0){
      return true;
    }
  }

  thirdStage(){
    if(this.fuelStageTwo<=0){
      return true;
    }
  }


  ngOnInit() {
    this.startRocketflying(this.rocket)
    
  }



}


