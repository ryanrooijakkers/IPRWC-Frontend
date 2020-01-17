import {Product} from './product.model';
import {Injectable} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {Subject} from 'rxjs';
import {HttpBody} from '../shared/http-body.model';

@Injectable({providedIn: 'root'})
export class ProductService {
  path = 'http://spoopy.nl/plants/';
  products: Product[];

  constructor(private httpService: HttpService) {}

  getAllProducts() {
    const productListSubject = new Subject<Product[]>();
    this.httpService.get(this.path + 'all')
      .subscribe((httpBody: HttpBody) => {
        this.products = httpBody.content as Product[];
        productListSubject.next(this.products);
        productListSubject.complete();
      });
    return productListSubject;
  }

  getProductById(id: number) {
    const productItemSubject = new Subject<Product>();
    this.httpService.get(this.path + id.toString())
      .subscribe((httpBody: HttpBody) => {
        productItemSubject.next(httpBody.content as Product);
        productItemSubject.complete();
      });
    return productItemSubject;
  }

  productsIsEmpty() {
    return this.products.length === 0;
  }
}
