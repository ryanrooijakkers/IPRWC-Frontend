import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const carouselElems = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElems, { fullWidth: true, indicators: true });

    const dropdownElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(dropdownElems);

    const modalElems = document.querySelectorAll('.modal');
    M.Modal.init(modalElems);
  }
}
