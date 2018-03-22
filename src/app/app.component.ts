import { Component, ViewChild, OnInit } from '@angular/core';

import { CartComponent } from './modules/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('cart') cartComponent: CartComponent;

  cartFlag: false;

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
