import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AccountComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserModule { }
