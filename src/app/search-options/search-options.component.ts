import { Component, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.css']
})
export class SearchOptionsComponent implements OnInit {
  
  model:Cat;
  options: object;
  breeds;
  cities;
  @Output() searchEvent = new EventEmitter<object>();
  @ViewChild('ageField') ageField: ElementRef;
  @ViewChild('vaccinatedCheck') vaccinatedCheck: ElementRef;
  @ViewChild('castratedCheck') castratedCheck: ElementRef;


  //vaccinatedCheck
  //CONSTRUCTOR
  constructor() {
    this.model = new Cat("","Всички",0,null,null,null, null, null,"Всички")
  }
  
  
  
  //FUNCTIONS
  test(){
    //VARIABLES
    let ageValue = parseInt(this.ageField.nativeElement.value);
    let vaccinated = this.vaccinatedCheck.nativeElement.checked;
    let castrated = this.castratedCheck.nativeElement.checked;
    //TESTING
    console.log(this.model.age + " vaccinated: " + vaccinated, castrated);
    //SETTING DATA
    this.model.castrated = castrated;
    this.model.vaccinated = vaccinated;
    this.model.age = ageValue;
    //EMITTING
    this.options = this.model;
    this.searchEvent.emit(this.options);
  }
  
  ngOnInit(){
    //VALUES FROM MODEL
    this.ageField.nativeElement.value = 0;
    let vaccinated = this.vaccinatedCheck.nativeElement.checked;
    let castrated = this.castratedCheck.nativeElement.checked;
    this.model.castrated = castrated;
    this.model.vaccinated = vaccinated;
    
    //BREEDS AND CITIES
    this.breeds = [
      "Всички",
      "Улична",
      "Девон рекс",
      "Герман Рекс",
      "Манкс",
      "Шотландска клепоуха котка",
      "Японски бобтейл",
      "Ориенталска котка",
      "Норвежска горска котка",
      "Персийска котка",
      "Европейска късокосместа котка",
      "Мейн Куун",
      "Сиамска котка",
      "Кимрик",
      "Регдол",
      "Турска ангорска котка",
      "Сибирска котка",
      "Сомалийска котка",
      "Руска синя котка",
      "Бурманска котка",
      "Британска късокосместа котка",
      "Бирманска котка",
      "Абисинска котка",
      "Персийска котка",
    ];  
    this.cities = [
      "Всички", "Благоевград", "Бургас", "Варна", "Велико Търново", "Видин", "Враца", "Габрово", "Добрич", "Кърджали", "Кюстендил", "Ловеч", "Монтана", "Пазарджик", "Перник", "Плевен", "Пловдив", "Разград", "Русе", "Силистра", "Сливен", "Смолян", "София", "Стара Загора", "Търговище", "Хасково", "Шумен", "Ямбол"]
    
    //EMITTING MODEL
    this.model.age = parseInt(this.ageField.nativeElement.value);
    this.model.city = "Всички"; this.model.breed = "Всички";
    console.log(this.model);
    this.options = this.model;
    this.searchEvent.emit(this.options);
  }

}
