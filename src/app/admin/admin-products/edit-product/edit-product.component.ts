import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../products/product.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../../products/product.service';
import {NgForm} from '@angular/forms';
import {HttpBody} from '../../../shared/http-body.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @ViewChild('editProductGroup', {static: false}) editProductGroup: NgForm;
  product: Product = new Product();

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: Params) => {
      this.productService.getProductById(data.product).subscribe((response: Product) => {
        this.product = response;
      });
    });
  }

  onSubmit() {
    if (this.editProductGroup.valid) {
      const product = this.editProductGroup.form.value as Product;
      this.productService.updateProduct(product, this.product.id).subscribe((httpBody: HttpBody) => {
        this.router.navigate(['admin-panel/products']);
        M.toast({html: httpBody.message});
      }, (addProductError) => {
        M.toast({html: addProductError.error.message});
      });
    }
  }
}
