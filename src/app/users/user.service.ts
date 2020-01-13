import {Injectable} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {HttpParams} from '@angular/common/http';
import {User} from './user.model';

@Injectable({providedIn: 'root'})
export class UserService {
  path = 'http://spoopy.nl/users/';
  currentUser: User = null;

  constructor(private httpService: HttpService) {
    const currentUser = localStorage.getItem('user');
    if (currentUser !== null) {
      this.currentUser = JSON.parse(currentUser);
    }
  }

  login(email: string, password: string) {
    const httpParams = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.httpService.postForm(this.path + 'login', httpParams);
  }

  register(name: string, email: string, password: string) {
    const httpParams = new HttpParams()
      .set('email', email)
      .set('password', password)
      .set('name', name);
    return this.httpService.postForm(this.path + 'register', httpParams);
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser = null;
  }
}
