import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {HttpBody} from '../../shared/http-body.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('formGroup', {static: false}) formGroup: NgForm;
  @ViewChild('password', {static: false}) password: HTMLInputElement;
  @ViewChild('passwordRepeat', {static: false}) passwordRepeat: HTMLInputElement;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    if (this.formGroup.valid && this.password.value === this.passwordRepeat.value) {
      const formValues = this.formGroup.form.value;
      this.userService.register(formValues.name, formValues.email, formValues.password).subscribe((httpBody: HttpBody) => {
        this.router.navigate(['home']);
        M.toast({html: httpBody.message});
      }, (registerError) => {
        M.toast({html: registerError.error.message});
      });
    }
  }
}
