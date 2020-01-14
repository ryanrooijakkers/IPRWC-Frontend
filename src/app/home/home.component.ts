import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const carouselElems = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElems, { fullWidth: true, indicators: true });
  }

}
