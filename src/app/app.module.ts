import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaIconModule } from 'ng-eva-icon';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './users/user.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {ProductResolver} from './products/product-resolver.service';
import {AdminModule} from './admin/admin.module';
import {ResponseInterceptor} from './shared/response.interceptor';
import {AuthenticationInterceptor} from './shared/authentication.interceptor';
import {ShoppingCartModule} from './shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EvaIconModule,
    ProductModule,
    SharedModule,
    UserModule,
    HttpClientModule,
    AdminModule,
    ShoppingCartModule
  ],
  providers: [
    ProductResolver,
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
