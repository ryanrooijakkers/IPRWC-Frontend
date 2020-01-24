import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {UserService} from '../../users/user.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  imageSrc: string;

  constructor(private productService: ProductService, private userService: UserService) { }

  ngOnInit() {
    this.imageSrc = this.productService.getProductImages(this.product);
  }

  orderProduct() {
    if (this.userService.isLoggedIn()) {
      this.productService.addShoppingCartProduct(this.product);
      M.toast({html: 'Product was added to your shopping cart'});
    } else {
      M.toast({html: 'You need to be logged in for this action'});
    }
  }
}
