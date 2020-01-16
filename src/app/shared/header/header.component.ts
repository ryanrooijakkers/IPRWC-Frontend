import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';
import {UserService} from '../../users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  loggedIn: boolean;
  isAuthorized: boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loggedIn = this.userService.isLoggedIn();
    this.isAuthorized = this.userService.isAuthorized();
  }

  ngAfterViewInit() {
    const dropdownElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(dropdownElems);

    const modalElems = document.querySelectorAll('.modal');
    M.Modal.init(modalElems);
  }

  logout() {
    this.userService.logout();
  }
}
