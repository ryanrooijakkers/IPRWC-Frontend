import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../product.model';
import {UserService} from '../../users/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  imageSrc: string;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private userService: UserService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: Params) => {
      this.productService.getProductById(data.product).subscribe((response: Product) => {
        this.product = response;
        this.imageSrc = this.productService.getProductImages(this.product);
      });
    });
  }

  addProductToCart() {
    if (this.userService.isLoggedIn()) {
      this.productService.addShoppingCartProduct(this.product);
      M.toast({html: 'Product was added to your shopping cart'});
    } else {
      M.toast({html: 'You need to be logged in for this action'});
    }
  }
}
