import { Component, ViewChild, OnInit } from '@angular/core';

import { CartListComponent } from './modules/cart/cart-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('cart') cartListComponent: CartListComponent;

  cartFlag: false;

  constructor() {}

  ngOnInit() {
  }

  onAdded(flag) {
    if (this.cartFlag) {
      this.cartListComponent.onCartUpdate();
    }
    this.cartFlag = flag;
  }
}
