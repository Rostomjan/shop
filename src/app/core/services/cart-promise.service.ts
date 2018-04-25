import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { toPromise } from 'rxjs/operator/toPromise';

import { IProduct } from '../../shared/interfaces';

@Injectable()
export class CartPromiseService {
  private cartUrl = 'http://localhost:3000/cart';

  constructor(
    private http: HttpClient
  ) { }

  static getQuantity(products: IProduct[]): number {
    return products.reduce((qty, product) => (qty += product.quantity), 0);
  }

  static getTotal(products: IProduct[]): number {
    return products.reduce((total, product) => (total += product.quantity * product.price), 0);
  }

  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  addToCart(product: IProduct): void {
    this.getCart()
      .then(response => response.products)
      .then(response => {
        if (response.every((item) => product.name !== item.name)) {
          product.quantity = 1;
          const url = this.cartUrl;
          const body = JSON.stringify(product);
          const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };

        return this.http
          .post(url, body, options)
          .toPromise()
          .catch(CartPromiseService.handleError);
        } else {
          const existingProduct = response.find(item => product.name === item.name);
          existingProduct.quantity += 1;
          return this.updateCart(existingProduct);
        }
      })
      .then(res => Promise.resolve(res));
  }

  updateCart(product: IProduct): Promise<{ products: IProduct[], len: number, total: number }> {
    const url = `${this.cartUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(() => this.getCart())
      .catch(CartPromiseService.handleError);
  }

  getCart(): Promise<{ products: IProduct[], len: number, total: number }> {
    return this.http
      .get(this.cartUrl)
      .toPromise()
      .then(response => {
        return {
          products: <IProduct[]>response,
          len: CartPromiseService.getQuantity(<IProduct[]>response),
          total: CartPromiseService.getTotal(<IProduct[]>response)
        };
      })
      .catch(CartPromiseService.handleError);
  }

  removeProduct(product: IProduct): Promise<{ products: IProduct[], len: number, total: number }> {
    return this.http
      .delete(`${this.cartUrl}/${product.id}`)
      .toPromise()
      .then(() => this.getCart())
      .catch(CartPromiseService.handleError);
  }

  removeAll(products: IProduct[]): Promise<{ products: IProduct[], len: number, total: number }> {
    products.forEach(product => this.removeProduct(product));
    return Promise.resolve({ products: [], len: 0, total: 0 });
  }

}
