import { Component, OnInit } from '@angular/core';
import {Car, CarsService} from "./cars.service";

@Component({
  selector: 'app-cars',
  template: `
    <hr>
    <h2>
      cars works!
    </h2>

     <ul>
       <li *ngFor="let car of cars"> {{ car.car }}</li>
     </ul>
  `,
  styles: [
  ]
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe(data => {
      this.cars = data;
    });
  }

}
