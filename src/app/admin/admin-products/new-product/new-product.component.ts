import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../../products/product.service';
import {HttpBody} from '../../../shared/http-body.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  @ViewChild('newProductGroup', {static: false}) newProductGroup: NgForm;
  images: FileList;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.newProductGroup.valid) {
      const formValues = this.newProductGroup.form.value;
      this.productService.addProduct(formValues).subscribe((httpBody: HttpBody) => {
        const productId = httpBody.content;
        if (productId !== -1 && this.images !== null && this.images.length >= 1) {
          this.uploadImages(this.images, productId, httpBody);
        } else {
          this.router.navigate(['admin-panel/products']);
          M.toast({html: httpBody.message});
        }
      }, (addProductError) => {
        M.toast({html: addProductError.error.message});
      });
    }
  }

  private uploadImages(images: FileList, productId: number, httpBody) {
    this.productService.saveProductImages(images, productId).subscribe(() => {
      this.router.navigate(['admin-panel/products']);
      M.toast({html: httpBody.message});
    }, (uploadImageError) => {
      M.toast({html: uploadImageError.error.message});
    });
  }

  filesSelected(images: FileList) {
    this.images = images;
  }
}
