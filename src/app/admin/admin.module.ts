import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {SharedModule} from '../shared/shared.module';
import { EditProductItemComponent } from './admin-products/edit-product-item/edit-product-item.component';
import {ProductModule} from '../products/product.module';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [
    AdminPanelComponent,
    EditProductItemComponent,
    AdminProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductModule,
    AppRoutingModule
  ]
})
export class AdminModule { }
