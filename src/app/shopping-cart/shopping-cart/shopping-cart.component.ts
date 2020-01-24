import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../products/product.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private productService: ProductService) {}

  ngOnInit() {
    const modalElements = document.querySelectorAll('.modal');
    M.Modal.init(modalElements, null);
  }

  totalPrice() {
    let totalPrice = 0;
    for (const product of this.productService.shoppingCartProducts) {
      totalPrice += product.price;
    }
    return totalPrice;
  }

  isEmpty() {
    return this.productService.shoppingCartProducts.length === 0;
  }

  checkout() {
    this.productService.checkout();
  }
}
