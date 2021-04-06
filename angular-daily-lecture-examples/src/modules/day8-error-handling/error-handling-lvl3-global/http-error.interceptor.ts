import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from "rxjs/operators";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<Error>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError(this.handleError.bind(this))
      );
  }

  handleError(error: HttpErrorResponse): Observable<HttpEvent<Error>>{
    let errorMessage = '';

    if (error.error instanceof ProgressEvent) {
      // client-side error
      errorMessage = `(Client-side error): ${error.message}`;
    } else {
      // server-side error
      errorMessage = `
          Code: ${error.status}\n
          Message: ${this.getServerErrorMessage(error)}
        `;
    }

    window.alert(errorMessage);

    return throwError(new Error(errorMessage));
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }
    }
  }
}
