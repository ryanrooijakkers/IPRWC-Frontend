import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {NgForm} from '@angular/forms';
import {HttpBody} from '../../shared/http-body.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild('changePasswordGroup', {static: false}) changePasswordGroup: NgForm;

  constructor(public userService: UserService) {}

  ngOnInit() {
  }

  onSubmitPassword() {
    if (this.checkPasswords() && this.changePasswordGroup.valid) {
      this.userService.changePassword(this.changePasswordGroup.form.value.newPassword).subscribe((httpBody: HttpBody) => {
        this.userService.logout();
        M.toast({html: httpBody.message});
      }, (changePasswordError) => {
        M.toast({html: changePasswordError.error.message});
      });
    }
  }

  checkPasswords() {
    const formValues = this.changePasswordGroup.form.value;
    return formValues.newPassword === formValues.newPasswordRepeat;
  }

  onDeleteAccount() {
    this.userService.deleteAccount().subscribe((httpBody: HttpBody) => {
      this.userService.logout();
      M.toast({html: httpBody.message});
    }, (deleteAccountError) => {
      M.toast({html: deleteAccountError.error.message});
    });
  }
}
