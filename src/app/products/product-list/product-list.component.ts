import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../shared/http.service';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private httpService: HttpService, private productService: ProductService) { }

  ngOnInit() {
  }

}
