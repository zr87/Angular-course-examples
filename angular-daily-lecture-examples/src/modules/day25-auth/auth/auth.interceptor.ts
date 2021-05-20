import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.auth.currentJwtValue) {

      const jwtToken = this.auth.currentJwtValue.accessToken;

      // console.log("intercept", jwtToken, request.url);

      const cloned = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + jwtToken)
      });

      return next.handle(cloned);
    }

    return next.handle(request);
  }
}
