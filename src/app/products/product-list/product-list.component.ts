import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../shared/http.service';
import {ProductService} from '../product.service';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  filteredProducts: Product[] = [];

  constructor(private httpService: HttpService, private productService: ProductService) { }

  ngOnInit() {
    this.filteredProducts = this.productService.products;
  }

  filterProducts(value: string) {
    if (value) {
      this.filteredProducts = this.productService.products.filter(product => {
        const name = product.name.toLocaleLowerCase();
        return name.includes(value);
      });
    } else {
      this.filteredProducts = this.productService.products;
    }
  }
}
