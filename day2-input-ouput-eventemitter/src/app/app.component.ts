import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day2-input-ouput-eventemitter';

  dataFromChildB: number;

  dataToChildA = 'Hello World';

  handleOutput(data: number): void {
    console.log('data', data);
    this.dataFromChildB = data;
  }
}
