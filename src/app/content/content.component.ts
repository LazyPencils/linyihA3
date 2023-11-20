import { Component } from '@angular/core';
import { Car } from '../myprofile';
import { MYCARS } from 'src/assets/myCar';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  cars: Car[] = MYCARS;
  showCars: boolean[] = [];
  displayCar: Car = new Car();
  i!: number;

  constructor() {
    // Initialize showCars array with false values
    this.showCars = new Array(this.cars.length).fill(false);
  }

  getCar(i:number) {
    console.log(i, this.cars[i].make);
    this.showCars[i] = !this.showCars[i];
    this.displayCar = this.cars[i];
    console.log('showCars:', this.showCars);
    console.log(this.displayCar.make);
  }
}


