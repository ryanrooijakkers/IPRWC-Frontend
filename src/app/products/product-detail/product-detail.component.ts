import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();
  @ViewChild('originImg', {static: true}) origin: ElementRef;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: Params) => {
      this.productService.getProductById(data.product).subscribe((response: Product) => {
        this.product = response;
        this.setOriginImage();
      });
    });
  }

  private setOriginImage() {
    this.origin.nativeElement.src = 'assets/images/' + this.product.origin.toLocaleLowerCase() + '.png';
  }
}
