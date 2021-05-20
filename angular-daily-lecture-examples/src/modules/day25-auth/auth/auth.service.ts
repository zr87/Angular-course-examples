import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccessToken, LoginCredential, User} from "./auth.interface";
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, shareReplay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static readonly API_URL = 'http://localhost:3000/login';
  private jwtSubject: BehaviorSubject<any>;

  public get currentJwtValue(): AccessToken {
    return this.jwtSubject.value;
  }

  constructor(private http: HttpClient) {

    const jwtToken = JSON.parse(localStorage.getItem('jwt') as string) as AccessToken || undefined;
    this.jwtSubject = new BehaviorSubject<AccessToken>(jwtToken);
  }

  login(credentials: LoginCredential): Observable<User> {
    return this.http
      .post<AccessToken>(AuthService.API_URL, credentials)
      .pipe(
        map(token => {
          localStorage.setItem('jwt', JSON.stringify(token));
          console.log("next ", token );
          this.jwtSubject.next(token);
          return { name: "John", email: credentials.email } as User;
        })
      );
  }

  isLoggedIn(): boolean {
    if (this.currentJwtValue) {
      console.log("this.jwt ", this.currentJwtValue);
      return true;
    } else {
      return false;
    }
  }
}
