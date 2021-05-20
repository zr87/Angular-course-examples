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
    const jwtToken = this.auth.currentJwtValue;
    console.log("acccessToken 2", jwtToken, jwtToken.accessToken);


    const header = new HttpHeaders({
      Authorization: `Bearer ${jwtToken.accessToken}`
    });

    return this.http.get<Car[]>(environment.API_URL + "/640/" + CarsService.CARS_API_PATH, {
      headers: header
    });
  }
}


export interface Car {
  id: number;
  car: string;
  userId: number;
}
