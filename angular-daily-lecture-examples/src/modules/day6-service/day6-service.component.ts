import { Component, OnInit } from '@angular/core';
import {RandomService} from "./random.service";

@Component({
  selector: 'app-day6-service',
  template: `
    <h1> Day6 Service example</h1>
    <p>
      Random number from service: {{ this.random }}
    </p>
  `,
  styles: [
  ]
})
export class Day6ServiceComponent implements OnInit {

  random: number | undefined;

  // inject service in constructor (Angular DI inject service instance by TS type)
  constructor(private randomService: RandomService) {}

  ngOnInit(): void {
    // calling service method
    this.random = this.randomService.getRandomNumber();
    console.log("this.randomService.getRandomNumber();", this.random);
  }

}


