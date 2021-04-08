import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static  readonly API_URL = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private http: HttpClient) {}

  // get all Users
  getPosts(limit = 3): Observable<Post[] | string>  {
    return this.http.get<Post[]>(DataService.API_URL, {
      params: new HttpParams().set('_limit', limit.toString()) // set limit query param
    }).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

 /* getPost(id: number , limit = 3): Observable<Post[] | string>  {
    return this.http.get<Post[]>(DataService.API_URL, {
      params: new HttpParams().set('_limit', limit.toString()) // set limit query param
    }).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }*/



  handleError(error: HttpErrorResponse): Observable<string> {

    let errorMessage = '';

    if (error.error instanceof ProgressEvent) {
      // client-side error
      errorMessage = `Client-side error: ${error.message}`;
    } else {
      // server-side error
      errorMessage = `server-side error: Error Code: ${error.status} Message: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
