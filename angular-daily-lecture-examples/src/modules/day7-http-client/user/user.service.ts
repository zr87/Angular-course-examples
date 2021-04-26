import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static readonly API_URL = `http://localhost:3000/users`;

  constructor(private http: HttpClient) { }

  //get all Users
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(UserService.API_URL);
  }

  //get a User (by id)
  getUser(id: number): Observable<User> {
    return this.http.get<User>(UserService.API_URL + `/${id}`)
  }

  //delete a User  (by id)
  deleteUser(id: number):Observable<any> {
    return this.http.delete(UserService.API_URL + `/${id}`)
  }

  // create new User
  createUser(user: User): Observable<User> {
    return this.http.post<User>(UserService.API_URL, user)
  }

  // update a User (by id)
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(UserService.API_URL+ `/${id}`, user)
  }

  patchUser(id: number, user: User): Observable<User> {
    return this.http.patch<User>(UserService.API_URL+ `/${id}`, user)
  }
}
