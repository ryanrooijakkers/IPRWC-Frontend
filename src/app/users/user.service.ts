import {Injectable} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {HttpParams} from '@angular/common/http';
import {User} from './user.model';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class UserService {
  currentUser: User = null;

  constructor(private httpService: HttpService, private router: Router) {
    const currentUser = localStorage.getItem('user');
    if (currentUser !== null) {
      this.currentUser = JSON.parse(currentUser);
    }
  }

  login(email: string, password: string) {
    const httpParams = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.httpService.postForm('users/login', httpParams);
  }

  register(name: string, email: string, password: string) {
    const httpParams = new HttpParams()
      .set('email', email)
      .set('password', password)
      .set('name', name);
    return this.httpService.postForm('users/register', httpParams);
  }

  isLoggedIn() {
    return this.currentUser !== null && localStorage.getItem('user') !== null;
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.removeItem('user');
    this.currentUser = null;
  }

  isAuthorized() {
    if (this.currentUser !== null) {
      return this.currentUser.privileges > 0;
    }
  }

  changePassword(password: string) {
    const httpParams = new HttpParams()
      .set('password', password);
    return this.httpService.putForm('users/' + this.currentUser.id + '/change_password', httpParams);
  }

  deleteAccount() {
    return this.httpService.delete('users/' + this.currentUser.id);
  }

  setNewAuthToken(authToken: string) {
    this.currentUser.authToken = authToken;
    localStorage.setItem('user', JSON.stringify(this.currentUser));
  }
}
