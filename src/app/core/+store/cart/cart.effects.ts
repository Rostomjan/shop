import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { switchMap, pluck } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as CartActions from './cart.actions';

import { CartPromiseService } from '../../../core';
import { IProduct } from '../../../shared/interfaces';

@Injectable()
export class CartEffects {

  constructor(
    private actions$: Actions,
    private cartPromiseService: CartPromiseService
  ) { }

  @Effect()
  getCart$: Observable<Action> = this.actions$.pipe(
    ofType<CartActions.GetCart>(CartActions.CartActionTypes.GET_CART),
    switchMap(
      (action: CartActions.GetCart) =>
      this.cartPromiseService
        .getCart()
        .then(cart => new CartActions.GetCartSuccess(cart))
        .catch(err => new CartActions.GetCartError(err))
    )
  );

  @Effect()
  updateCart$: Observable<Action> = this.actions$.pipe(
    ofType<CartActions.UpdateCart>(CartActions.CartActionTypes.UPDATE_CART),
    pluck('payload'),
    switchMap(
      (payload: IProduct) =>
        this.cartPromiseService
          .updateCart(payload)
          .then(products => new CartActions.UpdateCartSuccess(products))
          .catch(err => new CartActions.UpdateCartError(err))
    )
  );

  @Effect()
  deleteCartProduct$: Observable<Action> = this.actions$.pipe(
    ofType<CartActions.DeleteCartProduct>(CartActions.CartActionTypes.DELETE_CART_PRODUCT),
    pluck('payload'),
    switchMap(
      (payload: IProduct) =>
        this.cartPromiseService
          .removeProduct(payload)
          .then(products => new CartActions.DeleteCartProductSuccess(products))
          .catch(err => new CartActions.DeleteCartProductError(err))
    )
  );

  @Effect()
  deleteCart$: Observable<Action> = this.actions$.pipe(
    ofType<CartActions.DeleteCart>(CartActions.CartActionTypes.DELETE_CART),
    pluck('payload'),
    switchMap(
      (payload: IProduct[]) =>
        this.cartPromiseService
          .removeAll(payload)
          .then(obj => new CartActions.DeleteCartSuccess(obj))
          .catch(err => new CartActions.DeleteCartError(err))
    )
  );
}
