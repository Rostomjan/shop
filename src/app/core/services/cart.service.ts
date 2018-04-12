import { Injectable } from '@angular/core';

import { IProduct } from '../../shared/interfaces';

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

  changeQuantity(product: IProduct, qty: number): {products: Promise<IProduct[]>, len: number, total: number} {
    this.cart.forEach(item => {
      if (item.name === product.name) {
        product.quantity = qty;
      }
    });
    const products: Promise<IProduct[]> =  new Promise((resolve) => resolve([...this.cart]));
    return {
      products: products,
      len: this.getQuantity(this.cart),
      total: this.getTotal(this.cart)
    };
  }

  receiveCartProducts(): {products: Promise<IProduct[]>, len: number, total: number} {
    const products: Promise<IProduct[]> =  new Promise((resolve) => resolve([...this.cart]));
    return {
      products: products,
      len: this.getQuantity(this.cart),
      total: this.getTotal(this.cart)
    };
  }

  removeProduct(product: IProduct): {products: Promise<IProduct[]>, len: number, total: number} {
    const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
    const products: Promise<IProduct[]> =  new Promise((resolve) => resolve([...this.cart]));
    return {
      products: products,
      len: this.getQuantity(this.cart),
      total: this.getTotal(this.cart)
    };
  }

  removeAll(): void {
    this.cart = [];
  }
}
