import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private http: HttpClient) {
  }

  hasEmail(email: string): Observable<boolean> {
    const queryParams = new HttpParams().set("email", email);

    return this.http.get('https://jsonplaceholder.typicode.com/users', {
      params: queryParams
    }).pipe(
      map((data: any) => (!!data.length))
    );
  }
}
