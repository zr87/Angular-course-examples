import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  UrlSegment,
  Route, CanActivateChild
} from '@angular/router';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad, CanActivateChild {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    // auth service request if user is allowed to login
    // Observabe - http requst
    return of(true);
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    console.log("canLoad", route, segments);
    return true;
  }

  // tslint:disable-next-line:max-line-length
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }


}
