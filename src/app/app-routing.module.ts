import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ShoppingCartComponent} from './users/shopping-cart/shopping-cart.component';
import {LoginComponent} from './users/login/login.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductResolver} from './products/product-resolver.service';
import {RegisterComponent} from './users/register/register.component';
import {AccountComponent} from './users/account/account.component';
import {AuthenticatedGuard} from './shared/authenticated.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent, resolve: {products: ProductResolver}},
  {path: 'products', component: ProductListComponent, resolve: {products: ProductResolver}},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthenticatedGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthenticatedGuard]},
  {path: 'product-detail/:product', component: ProductDetailComponent},
  {path: 'account', component: AccountComponent, canActivate: [AuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
