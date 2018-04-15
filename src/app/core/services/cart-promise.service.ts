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

  addToCart(product: IProduct): void {
    this.receiveCartProducts()
      .then(response => response.products)
      .then(response => {
        if (response.every((item) => product.name !== item.name)) {
          product.quantity = 1;
          const url = this.cartUrl;
          const body = JSON.stringify(product);
          const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };

        this.http
          .post(url, body, options)
          .toPromise()
          .catch(this.handleError);
        } else {
          const existingProduct = response.find(item => product.name === item.name);
          existingProduct.quantity += 1;
          this.updateCart(existingProduct);
        }
      });
  }

  getQuantity(products: IProduct[]): number {
    return products.reduce((qty, product) => (qty += product.quantity), 0);
  }

  getTotal(products: IProduct[]): number {
    return products.reduce((total, product) => (total += product.quantity * product.price), 0);
  }

  updateCart(product: IProduct): Promise<IProduct> {
    const url = `${this.cartUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => <IProduct>response)
      .catch(this.handleError);
  }

  receiveCartProducts(): Promise<{ products: IProduct[], len: number, total: number }> {
    return this.http
      .get(this.cartUrl)
      .toPromise()
      .then(response => {
        return {
          products: <IProduct[]>response,
          len: this.getQuantity(<IProduct[]>response),
          total: this.getTotal(<IProduct[]>response)
        };
      })
      .catch(this.handleError);
  }

  removeProduct(product: IProduct): Promise<IProduct> {
    return this.http
      .delete(`${this.cartUrl}/${product.id}`)
      .toPromise()
      .catch(this.handleError);
  }

  removeAll(products: IProduct[]): void {
    products.forEach(product => this.removeProduct(product));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
