import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataFromChildB: number;
  dataToChildA = 'Hello World';

  title = 'day2-input-ouput-eventemitter'; // 2way binded to cjildC

  handleOutput(data: number): void {
    console.log('data', data);
    this.dataFromChildB = data;
  }
}
