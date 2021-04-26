import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {User} from "../user/user.interface";


@Component({
  selector: 'app-day7-http-client',
  templateUrl: './day7-http-client.component.html',
  styleUrls: ['./day7-http-client.component.scss']
})
export class Day7HttpClientComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      console.log("getUser(): ", users[0].name);
    });

    this.userService.getUser(2).subscribe(data => {
      console.log("getUser(2)", data);
    });

    // delete
    this.userService.deleteUser(3).subscribe(data => {
      console.log("deleteUser(3)", data);
    });

    // create a user
    const newUser = { name: "Son Goku"} as User;

    this.userService.createUser(newUser).subscribe(data => {
      console.log(".createUser(newUser)", data);
    });

    // modify with PUT User with id:10
    const user = {name: "Jimi HEndrix"} as User;

    this.userService.updateUser(10, user)
      .subscribe(data => {
        console.log(".updateUser(newUser)", data);
      });

    // modify with PATCH User with id:10
    const user2 = {username: "shark"} as User;

    this.userService.patchUser(9, user2)
      .subscribe(data => {
        console.log(".patchUser(newUser)", data);
      });
  }

}
