import {Component, OnInit} from '@angular/core';
import {UserService} from "./user/user.service";
import {User} from "./user/user.interface";

@Component({
  selector: 'app-root',
  template: `
    <h1> {{title }}</h1>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'http-client-demo';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      console.log("getUser(): ", users[0].name);
    });

    this.userService.getUser(2).subscribe(user => {
      console.log("getUser(2)", user);
    })

    //delete
    this.userService.deleteUser(3).subscribe(user => {
      console.log("deleteUser(3)", user);
    })

    //create a user
     let newUser = { name: "Son Goku"} as User;

     this.userService.createUser(newUser).subscribe(user => {
       console.log(".createUser(newUser)", user);
     });

    // modify with PUT User with id:10
    let user = {name: "Jimi HEndrix"} as User;
    this.userService.updateUser(10, user)
        .subscribe(user => {
          console.log(".updateUser(newUser)", user);
        })

    // modify with PATCH User with id:10
    let user2 = {username: "shark"} as User;
    this.userService.patchUser(9, user2)
        .subscribe(user => {
          console.log(".patchUser(newUser)", user);
        })
  }
}
