import {Component, OnInit} from '@angular/core';
import {DataService, Post} from "./data.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-day8-error-handling-lvl2',
  templateUrl: './day8-error-handling.component.html',
  styleUrls: ['./day8-error-handling.component.scss']
})
export class Day8ErrorHandlingComponent implements OnInit {

  error: HttpErrorResponse | undefined = undefined;
  isLoading = false;
  data: Post[] | string = [];

  errorMessage = '';

  constructor(private readonly dataService: DataService) {
  }

  ngOnInit(): void {
  }

  makeApiCall(): void {
    this.dataService.getPosts()
      .subscribe(
        (posts) => {
          this.data = posts;
        },
        (errorMsg: string) => {
          this.errorMessage = errorMsg;
        });
  }

}
