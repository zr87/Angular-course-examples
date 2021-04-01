import {Component} from '@angular/core';
import {RandomService} from './random.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-example';

  constructor(private randomService: RandomService) {}

  foo(): void {
    this.randomService.getRandomNumber();
  }
}


