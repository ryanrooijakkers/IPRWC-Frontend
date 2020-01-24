import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';
import {UserService} from '../users/user.service';
import {ProductService} from '../products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private userService: UserService, private productService: ProductService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    const dropdownElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(dropdownElems);

    const modalElems = document.querySelectorAll('.modal');
    M.Modal.init(modalElems);
  }

  logout() {
    this.userService.logout();
    this.productService.clearShoppingCart();
  }

  onSubmitSearch() {
    console.log('test');
  }
}
