import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {SharedModule} from '../shared/shared.module';
import { AdminProductItemComponent } from './admin-products/admin-product-item/admin-product-item.component';
import {ProductModule} from '../products/product.module';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import {AppRoutingModule} from '../app-routing.module';
import { NewProductComponent } from './admin-products/new-product/new-product.component';
import { EditProductComponent } from './admin-products/edit-product/edit-product.component';
import {FormsModule} from '@angular/forms';
import {AdminPanelHeaderComponent} from './admin-panel-header/admin-panel-header.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminProductItemComponent,
    AdminProductsComponent,
    NewProductComponent,
    EditProductComponent,
    AdminPanelHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
