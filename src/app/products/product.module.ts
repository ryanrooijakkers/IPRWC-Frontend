import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { EvaIconModule } from 'ng-eva-icon';
import { LatestProductsComponent } from './latest-products/latest-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    LatestProductsComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EvaIconModule,
    SharedModule
  ],
  providers: [],
  exports: [
    LatestProductsComponent
  ],
  bootstrap: []
})
export class ProductModule { }
