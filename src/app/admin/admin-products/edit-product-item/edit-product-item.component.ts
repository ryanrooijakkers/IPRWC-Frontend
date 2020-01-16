import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../products/product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-edit-product-item]',
  templateUrl: './edit-product-item.component.html',
  styleUrls: ['./edit-product-item.component.css']
})
export class EditProductItemComponent implements OnInit {

  @Input() product: Product = new Product();

  constructor() { }

  ngOnInit() {
  }

}
