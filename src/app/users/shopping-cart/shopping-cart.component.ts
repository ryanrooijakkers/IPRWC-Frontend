import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from '../../products/product.model';
import {ProductService} from '../../products/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.shoppingCartProducts;
  }
}
