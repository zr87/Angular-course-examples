import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static  readonly API_URL = `https://jsonplaceholder.typicode.com/posts3`;

  constructor(private http: HttpClient) {}

  // get all Users
  getPosts(limit = 3): Observable<Post[]>  {
    return this.http.get<Post[]>(DataService.API_URL, {
      params: new HttpParams().set('_limit', limit.toString()) // set limit query param
    });
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
