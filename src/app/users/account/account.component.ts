import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser: User;
  @ViewChild('newPassword', {static: false}) newPassword: string;
  @ViewChild('newPasswordRepeat', {static: false}) newPasswordRepeat: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  onSubmitInfo() {

  }

  onSubmitPassword() {

  }
}
