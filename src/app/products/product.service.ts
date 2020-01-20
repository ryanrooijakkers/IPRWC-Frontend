import {Product} from './product.model';
import {Injectable} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {Subject} from 'rxjs';
import {HttpBody} from '../shared/http-body.model';
import {HttpParams} from '@angular/common/http';
import {Image} from './image.model';

@Injectable({providedIn: 'root'})
export class ProductService {
  path = 'http://spoopy.nl/plants/';
  products: Product[];
  shoppingCartProducts: Product[] = [];

  constructor(private httpService: HttpService) {
    const shoppingCartProducts = localStorage.getItem('shoppingCartProducts');
    if (shoppingCartProducts !== null) {
      this.shoppingCartProducts = JSON.parse(shoppingCartProducts);
    }
  }

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

  addProduct(formValues) {
    const httpParams = this.makeProductHttpParams(formValues);
    return this.httpService.postForm(this.path + 'new', httpParams);
  }

  deleteProduct(productId: number) {
    return this.httpService.delete(this.path + productId);
  }

  deleteProductFromArray(product: Product) {
    const index: number = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  updateProduct(product: Product, productId: number) {
    return this.httpService.putJSON(this.path + productId, JSON.stringify(product));
  }

  getProductImages(product: Product) {
    if (product.images.length >= 1) {
      return this.httpService.getImageURL(product.images[0]);
    }
  }

  getProductImage(image: Image) {
    return this.httpService.getImageURL(image);
  }

  saveProductImages(images: FileList, productId: number) {
    const data = new FormData();
    Array.from(images).forEach(image => {
      data.append('images', image);
    });
    return this.httpService.postMultiPart(`http://spoopy.nl/images/upload/${productId}`, data);
  }

  makeProductHttpParams(formValues) {
    return new HttpParams()
      .set('name', formValues.name)
      .set('price', formValues.price)
      .set('description', formValues.description)
      .set('height', formValues.height)
      .set('temperature', formValues.temperature)
      .set('lightNeed', formValues.lightNeed)
      .set('nutrition', formValues.nutrition)
      .set('ph', formValues.ph);
  }

  addShoppingCartProduct(product: Product) {
    this.shoppingCartProducts.push(product);
    localStorage.setItem('shoppingCartProducts', JSON.stringify(this.shoppingCartProducts));
  }

  clearShoppingCart() {
    localStorage.removeItem('shoppingCartProducts');
    this.shoppingCartProducts = [];
  }
}
