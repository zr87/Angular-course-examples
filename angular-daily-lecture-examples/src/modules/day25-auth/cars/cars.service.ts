import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  static readonly CARS_API_PATH = 'cars';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(environment.API_URL + "/640/" + CarsService.CARS_API_PATH);
  }

  getCarById(id: number): Observable<Car>{
    return this.http.get<Car>(environment.API_URL + "/640/" + CarsService.CARS_API_PATH + "/" + id);
  }
}


export interface Car {
  id: number;
  car: string;
  userId: number;
}
