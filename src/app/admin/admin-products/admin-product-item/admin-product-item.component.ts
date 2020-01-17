import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../products/product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-edit-product-item]',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.css']
})
export class AdminProductItemComponent implements OnInit {

  @Input() product: Product = new Product();

  constructor() { }

  ngOnInit() {
  }

}
