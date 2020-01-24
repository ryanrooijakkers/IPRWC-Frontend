import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart/shopping-cart.component';
import {LoginComponent} from './users/login/login.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductResolver} from './products/product-resolver.service';
import {RegisterComponent} from './users/register/register.component';
import {AccountComponent} from './users/account/account.component';
import {AuthenticatedGuard} from './shared/authenticated.guard';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import {AuthorisationGuard} from './shared/authorisation.guard';
import {NewProductComponent} from './admin/admin-products/new-product/new-product.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {EditProductComponent} from './admin/admin-products/edit-product/edit-product.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent, resolve: {products: ProductResolver}},
  {path: 'products', component: ProductListComponent, resolve: {products: ProductResolver}},
  {path: 'shopping-cart', component: ShoppingCartComponent, resolve: {products: ProductResolver}},
  {path: 'login', component: LoginComponent, canActivate: [AuthenticatedGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthenticatedGuard]},
  {path: 'product-detail/:product', component: ProductDetailComponent},
  {path: 'account', component: AccountComponent, canActivate: [AuthenticatedGuard]},
  {path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthorisationGuard, AuthenticatedGuard],
    canActivateChild: [AuthorisationGuard, AuthenticatedGuard], children: [
      {path: 'products', component: AdminProductsComponent, resolve: {products: ProductResolver}},
      {path: 'new-product', component: NewProductComponent, resolve: {products: ProductResolver}},
      {path: 'edit-product/:product', component: EditProductComponent, resolve: {products: ProductResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
