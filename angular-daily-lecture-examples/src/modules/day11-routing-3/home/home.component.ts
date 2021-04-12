import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {}

  goToPage(): void {
    this.router.navigate(['page1', 123, "asd"]);
  }

}
