import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../products/product.model';
import {ProductService} from '../../../products/product.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-shopping-cart-item]',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() product: Product = new Product();
  imageSrc: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.imageSrc = this.productService.getProductImages(this.product);
  }

  removeProduct() {
    this.productService.removeShoppingCartProduct(this.product);
  }
}
