import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day5';

  color = 'lightpink';

  isTrue = true;

  style = {
    background: this.color,
    border: '1px solid red'
  };

  names: string[] = ['Danny', 'Mario', 'Elsa'];

  buttonText = 'button';

  onInputChange(event: any): void {
    console.log('event', event);
  }
}
