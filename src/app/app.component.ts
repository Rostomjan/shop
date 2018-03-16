import { Component, ViewChild, OnInit } from '@angular/core';

import { ProductListComponent, CartComponent } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartFlag: false;
  @ViewChild('isNotEmpty') productListComponent: ProductListComponent;
  @ViewChild('cart') cartComponent: CartComponent;

  constructor() {}

  ngOnInit() {
  }

  onAdded(flag) {
    if (this.cartFlag) {
      this.cartComponent.onCartUpdate();
    }
    this.cartFlag = flag;
  }
}
