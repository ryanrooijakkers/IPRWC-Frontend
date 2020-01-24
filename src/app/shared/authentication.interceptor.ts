import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserService} from '../users/user.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.userService.isLoggedIn()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.currentUser.authToken}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.jwtExpired();
          return of(error);
        }
        throw error;
      })
    );
  }

  private jwtExpired() {
    this.userService.logout();
  }
}
