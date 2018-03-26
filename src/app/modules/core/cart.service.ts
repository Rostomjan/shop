import { Injectable } from '@angular/core';

import { IProduct } from '../shared/interfaces';

@Injectable()
export class CartService {
  private cart: IProduct[] = [];

  constructor() { }

  addToCart(product: IProduct): void {
    if (this.cart.every((item) => product.name !== item.name)) {
      product.quantity = 1;
      this.cart.push(product);
    } else {
      product.quantity += 1;
    }
  }

  getQuantity(products: IProduct[]): number {
    return products.reduce((qty, product) => (qty += product.quantity), 0);
  }

  getTotal(products: IProduct[]): number {
    return products.reduce((total, product) => (total += product.quantity * product.price), 0);
  }

  receiveCartProducts(): IProduct[] {
    return [...this.cart];
  }

  removeProduct(product: IProduct): IProduct[] {
    const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
    return this.receiveCartProducts();
  }
}
