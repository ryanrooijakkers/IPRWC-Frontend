import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css']
})
export class LatestProductsComponent implements OnInit {

  latestProducts: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.latestProducts = this.productService.products.slice(0, 4);
  }

}
