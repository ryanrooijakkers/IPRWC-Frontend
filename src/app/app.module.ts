import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaIconModule } from 'ng-eva-icon';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './users/user.module';
import { HttpClientModule } from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {ProductResolver} from './products/product-resolver.service';

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
    HttpClientModule
  ],
  providers: [
    ProductResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
