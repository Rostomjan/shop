import { Action } from '@ngrx/store';

import { IProduct } from '../../../shared/interfaces';

export enum CartActionTypes {
  GET_CART = '[Cart] GET_CART',
  GET_CART_SUCCESS = '[Cart] GET_CART_SUCCESS',
  GET_CART_ERROR = '[Cart] GET_CART_ERROR',

  DELETE_CART = '[Cart] DELETE_CART',
  DELETE_CART_SUCCESS = '[Cart] DELETE_CART_SUCCESS',
  DELETE_CART_ERROR = '[Cart] DELETE_CART_ERROR',
}

export class GetCart implements Action {
  readonly type = CartActionTypes.GET_CART;
}

export class GetCartSuccess implements Action {
  readonly type = CartActionTypes.GET_CART_SUCCESS;
  constructor(public payload: { products: IProduct[], len: number, total: number }) { }
}

export class GetCartError implements Action {
  readonly type = CartActionTypes.GET_CART_ERROR;
  constructor(public payload: Error | string) { }
}

export class DeleteCart implements Action {
  readonly type = CartActionTypes.DELETE_CART;
  constructor(public payload: IProduct) { }
}

export class DeleteCartSuccess implements Action {
  readonly type = CartActionTypes.DELETE_CART_SUCCESS;
  constructor(public payload: IProduct) { }
}

export class DeleteCartError implements Action {
  readonly type = CartActionTypes.DELETE_CART_ERROR;
  constructor(public payload: Error | string) { }
}

export type CartActions
  = GetCart
  | GetCartSuccess
  | GetCartError
  | DeleteCart
  | DeleteCartSuccess
  | DeleteCartError;
