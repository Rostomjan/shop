import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';
import { AppState, getCart, getCartTotal, getCartLen } from '../../../core/+store';
import * as CartActions from '../../../core/+store/cart/cart.actions';
import * as RouterActions from '../../../core/+store/router/router.actions';

import { IProduct } from '../../../shared/interfaces';
import { CartPromiseService, LocalStorageService } from '../../../core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: IProduct[];
  cart$: Observable<IProduct[]>;
  len$: Observable<number>;
  total$: Observable<number>;

  constructor(
    private cartPromiseService: CartPromiseService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.cart$ = this.store.pipe(select(getCart));
    this.total$ = this.store.pipe(select(getCartTotal));
    this.len$ = this.store.pipe(select(getCartLen));

    this.store.dispatch(new CartActions.GetCart());
  }

  onChangedQty(product: IProduct): void {
    this.store.dispatch(new CartActions.UpdateCart(product));
  }

  onRemove(product: IProduct): void {
    this.store.dispatch(new CartActions.DeleteCartProduct(product));
  }

  clearCart(): void {
    let goods: IProduct[];
    this.cart$.subscribe(products => goods = products);
    this.store.dispatch(new CartActions.DeleteCart(goods));
  }

  checkout() {
    let orders;
    this.cart$.subscribe(items => orders = items);
    LocalStorageService.setItem('order-' + Math.random().toString(36).substr(7), JSON.stringify(orders));
    this.store.dispatch(new RouterActions.Go({
      path: ['/cart//checkout']
    }));
  }

}
