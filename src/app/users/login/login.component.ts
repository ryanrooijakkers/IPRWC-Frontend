import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {User} from '../user.model';
import {HttpBody} from '../../shared/http-body.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('formGroup', {static: false}) formGroup: NgForm;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userService.currentUser !== null) {
      this.router.navigate(['home']);
      M.toast({html: 'You are already logged in'});
    }
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const formValues = this.formGroup.form.value;
      this.userService.login(formValues.email, formValues.password).subscribe((httpBody: HttpBody) => {
        this.userService.currentUser = httpBody.content as User;
        localStorage.setItem('user', JSON.stringify(this.userService.currentUser));
        this.router.navigate(['home']);
        M.toast({html: httpBody.message});
      }, (loginError) => {
        M.toast({html: loginError.error.message});
      });
    }
  }
}
