import { Injectable } from '@angular/core';

import { Product } from '../interfaces';

@Injectable()
export class CartService {
  private cart: Product[] = [];

  constructor() { }

  addToCart(product: Product): void {
    if (this.cart.every((item) => product.name !== item.name)) {
      product.quntity = 1;
      this.cart.push(product);
    } else {
      product.quntity += 1;
    }
  }

  receiveCartProducts() {
    return [...this.cart];
  }

}
