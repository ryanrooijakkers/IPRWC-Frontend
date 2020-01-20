import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../products/product.model';
import {ProductService} from '../../../products/product.service';
import {HttpBody} from '../../../shared/http-body.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-edit-product-item]',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.css']
})
export class AdminProductItemComponent implements OnInit {

  @Input() product: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  removeProduct() {
    if (window.confirm('The product ' + this.product.name + ' will be deleted. Is this okay?')) {
      this.productService.deleteProduct(this.product.id).subscribe((httpBody: HttpBody) => {
        this.productService.deleteProductFromArray(this.product);
        M.toast({html: httpBody.message});
      }, (deleteProductError) => {
        M.toast(deleteProductError.error.message);
      });
    }
  }
}
