import {Injectable} from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ExampleComponent} from "./components/example.component";

@Injectable({
  providedIn: 'root'
})
export class ExampleGuard implements CanDeactivate<ExampleComponent> {
  canDeactivate(
    component: ExampleComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("Guard works");
    console.log("paassed component", component.isDirty);

    if (component.isDirty) {
      const navigateAway = window.confirm('You have unsaved changes. \n Are you sure want to navigate away?');

      if (navigateAway) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

}
