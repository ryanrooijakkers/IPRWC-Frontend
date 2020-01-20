import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../products/product.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor() { }

  ngOnInit() {
  }

}
