import {Component} from '@angular/core';

@Component({
  selector: 'app-day5-basics',
  templateUrl: './day5-basics.component.html',
  styleUrls: ['./day5-basics.component.scss']
})
export class Day5BasicsComponent {

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
