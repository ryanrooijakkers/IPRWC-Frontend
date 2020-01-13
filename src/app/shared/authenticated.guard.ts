import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {UserService} from '../users/user.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthenticatedGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if ((route.routeConfig.path === 'register' || route.routeConfig.path === 'login') && this.userService.isLoggedIn()) {
      this.router.navigate(['home']);
      M.toast({html: 'You need to be logged out for this action'});
      return false;
    } else if ((route.routeConfig.path === 'register' || route.routeConfig.path === 'login') && !this.userService.isLoggedIn()) {
      return true;
    } else if (this.userService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['home']);
    M.toast({html: 'You are not logged in'});
    return false;
  }

}
