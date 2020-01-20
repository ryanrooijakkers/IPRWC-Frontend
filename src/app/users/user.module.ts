import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item/shopping-cart-item.component';



@NgModule({
  declarations: [LoginComponent, ShoppingCartComponent, RegisterComponent, AccountComponent, ShoppingCartItemComponent],
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
