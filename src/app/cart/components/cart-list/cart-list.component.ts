import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';
import { AppState, CartState } from './../../../core/+store';
import * as CartActions from './../../../core/+store/cart/cart.actions';

import { IProduct } from '../../../shared/interfaces';
import { CartPromiseService, LocalStorageService } from '../../../core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: IProduct[];
  len: number;
  total: number;

  cart$: Observable<CartState>;

  constructor(
    private router: Router,
    private cartPromiseService: CartPromiseService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    console.log('We have a store! ', this.store);
    this.cart$ = this.store.pipe(select('cart'));
    this.store.dispatch(new CartActions.GetCart());

    this.getCart().catch(err => console.log(err));
  }

  onCartUpdate(): void {
    this.getCart().catch(err => console.log(err));
  }

  onChangedQty(product: IProduct): void {
    this.cartPromiseService.updateCart(product)
      .then(() => this.getCart());
  }

  onRemove(product: IProduct): void {
    this.cartPromiseService.removeProduct(product)
      .then(() => this.getCart());
  }

  clearCart(): void {
    this.cartPromiseService.removeAll(this.products);
    [this.len, this.total, this.products] = [0, 0, []];
  }

  checkout() {
    LocalStorageService.setItem('order-' + Math.random().toString(36).substr(7), JSON.stringify([...this.products]));
    this.router.navigate(['/cart//checkout']);
  }

  private async getCart() {
    ( { products: this.products, len: this.len, total: this.total } = await this.cartPromiseService.receiveCartProducts() );
  }
}
