import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { map, concatMap, catchError } from 'rxjs/operators';

import { ProductsAPI } from './products.config';
import { IProduct } from '../shared/interfaces';

@Injectable()
export class ProductObservableService {

  constructor(
    private http: HttpClient,
    @Inject(ProductsAPI) private productsUrl: string
  ) { }

  addProduct(product: IProduct): Observable<IProduct> {
    const newProduct = { ...product };
    newProduct['id'] = this.generateId();
    const url = this.productsUrl;
    const body = JSON.stringify(newProduct);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(url, body, options)
      .pipe(map(this.handleData), catchError(this.handleError));
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get(this.productsUrl)
      .pipe(map(this.handleData), catchError(this.handleError));
  }

  getProduct(id: string): Observable<IProduct> {

    return this.http.get(`${this.productsUrl}/${id}`)
      .pipe(map(this.handleData), catchError(this.handleError));
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(url, body, options)
      .pipe(map(this.handleData), catchError(this.handleError));
  }

  deleteProduct(id: string): Observable<string> {
    return this.http.delete(`${this.productsUrl}/${id}`)
      .pipe(
        concatMap(() => [id])
      );
  }

  private handleData(response: HttpResponse<IProduct | IProduct[]>) {
    return response || {};
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${
        err.error
      }`;
    }

    console.error(errorMessage);
    return _throw(errorMessage);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2);
  }
}
