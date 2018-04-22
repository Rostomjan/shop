import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as CartActions from './cart.actions';
import { CartState, initialCartState } from './cart.state';

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
        .receiveCartProducts()
        .then(cart => new CartActions.GetCartSuccess(cart))
        .catch(err => new CartActions.GetCartError(err))
    )
  );

  // deleteCart$: Observable<Action> = this.actions$.pipe(
  //   ofType<CartActions.DeleteCart>(CartActions.CartActionTypes.DELETE_CART),
  //   switchMap(
  //     (action: CartActions.DeleteCart) =>
  //     this.cartPromiseService
  //       .removeProduct()
  //       .then(cart => new CartActions.DeleteCartSuccess(cart))
  //       .catch(err => new CartActions.DeleteCartError(err))
  //   )
  // );
}
