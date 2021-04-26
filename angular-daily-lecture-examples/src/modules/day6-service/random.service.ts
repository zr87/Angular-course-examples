
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  getRandomNumber(): number {
    return (Math.random() * 100);
  }
}


