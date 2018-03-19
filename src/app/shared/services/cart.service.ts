import { Injectable } from '@angular/core';

import { Product } from '../interfaces';

@Injectable()
export class CartService {
  private cart: Product[] = [];

  constructor() { }

  addToCart(product: Product): void {
    if (this.cart.every((item) => product.name !== item.name)) {
      this.cart.push(product);
    }
  }

  receiveCartProducts() {
    return [...this.cart];
  }

}
