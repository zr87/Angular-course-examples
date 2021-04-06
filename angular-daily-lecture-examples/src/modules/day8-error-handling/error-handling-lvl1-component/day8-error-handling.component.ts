import {Component, OnInit} from '@angular/core';
import {DataService, Post} from "./data.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-day8-error-handling-lvl1',
  templateUrl: './day8-error-handling.component.html',
  styleUrls: ['./day8-error-handling.component.scss']
})
export class Day8ErrorHandlingComponent implements OnInit {

  error: HttpErrorResponse | undefined = undefined;
  isLoading = false;
  data: Post[] = [];

  errorMessage = '';

  constructor(private readonly dataService: DataService) {
  }

  ngOnInit(): void {
  }

  makeApiCall(): void {
    this.dataService.getPosts()
      .subscribe(posts => {
        this.data = posts;
      }, error => {

        console.log("error object", error); // error: instance of HttpErrorResponse
        this.error = error;
        // this.handleError(error);
      }, () => {
        console.log("completed");
      });
  }

  // step 2. intro
 /* handleError(error: HttpErrorResponse): void {
    if (error.error instanceof ProgressEvent) {
      // client-side error
      this.errorMessage = `Error: ${error.message}`;
    } else {
      // server-side error
      this.errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(this.errorMessage);
  }*/

}
