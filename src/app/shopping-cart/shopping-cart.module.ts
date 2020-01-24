import {NgModule} from '@angular/core';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ShoppingCartItemComponent} from './shopping-cart/shopping-cart-item/shopping-cart-item.component';

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingCartItemComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class ShoppingCartModule { }
