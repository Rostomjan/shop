import { Action } from '@ngrx/store';

import { IProduct } from '../../../shared/interfaces';

declare module '@ngrx/store' {
  interface Action {
    type: string;
    payload?: any;
  }
}

export enum CartActionTypes {
  GET_CART = '[Cart] GET_CART',
  GET_CART_SUCCESS = '[Cart] GET_CART_SUCCESS',
  GET_CART_ERROR = '[Cart] GET_CART_ERROR',

  ADD_TO_CART = '[Cart] ADD_TO_CART',
  ADD_TO_CART_SUCCESS = '[Cart] ADD_TO_CART_SUCCESS',
  ADD_TO_CART_ERROR = '[Cart] ADD_TO_CART_ERROR',

  UPDATE_CART = '[Cart] UPDATE_CART',
  UPDATE_CART_SUCCESS = '[Cart] UPDATE_CART_SUCCESS',
  UPDATE_CART_ERROR = '[Cart] UPDATE_CART_ERROR',

  DELETE_CART_PRODUCT = '[Cart] DELETE_CART_PRODUCT',
  DELETE_CART_PRODUCT_SUCCESS = '[Cart] DELETE_CART_PRODUCT_SUCCESS',
  DELETE_CART_PRODUCT_ERROR = '[Cart] DELETE_CART_PRODUCT_ERROR',

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

export class AddToCart implements Action {
  readonly type = CartActionTypes.ADD_TO_CART;
  constructor(public payload: IProduct) { }
}

export class AddToCartSuccess implements Action {
  readonly type = CartActionTypes.ADD_TO_CART_SUCCESS;
  constructor(public payload: { products: IProduct[], len: number, total: number }) { }
}

export class AddToCartError implements Action {
  readonly type = CartActionTypes.ADD_TO_CART_ERROR;
  constructor(public payload: Error | string) { }
}

export class UpdateCart implements Action {
  readonly type = CartActionTypes.UPDATE_CART;
  constructor(public payload: IProduct) { }
}

export class UpdateCartSuccess implements Action {
  readonly type = CartActionTypes.UPDATE_CART_SUCCESS;
  constructor(public payload: { products: IProduct[], len: number, total: number }) { }
}

export class UpdateCartError implements Action {
  readonly type = CartActionTypes.UPDATE_CART_ERROR;
  constructor(public payload: Error | string) { }
}

export class DeleteCartProduct implements Action {
  readonly type = CartActionTypes.DELETE_CART_PRODUCT;
  constructor(public payload: IProduct) { }
}

export class DeleteCartProductSuccess implements Action {
  readonly type = CartActionTypes.DELETE_CART_PRODUCT_SUCCESS;
  constructor(public payload: { products: IProduct[], len: number, total: number }) { }
}

export class DeleteCartProductError implements Action {
  readonly type = CartActionTypes.DELETE_CART_PRODUCT_ERROR;
  constructor(public payload: Error | string) { }
}

export class DeleteCart implements Action {
  readonly type = CartActionTypes.DELETE_CART;
  constructor(public payload: IProduct[]) { }
}

export class DeleteCartSuccess implements Action {
  readonly type = CartActionTypes.DELETE_CART_SUCCESS;
  constructor(public payload: { products: IProduct[], len: number, total: number }) { }
}

export class DeleteCartError implements Action {
  readonly type = CartActionTypes.DELETE_CART_ERROR;
  constructor(public payload: Error | string) { }
}

export type CartActions
  = GetCart
  | GetCartSuccess
  | GetCartError
  | AddToCart
  | AddToCartSuccess
  | AddToCartError
  | UpdateCart
  | UpdateCartSuccess
  | UpdateCartError
  | DeleteCartProduct
  | DeleteCartProductSuccess
  | DeleteCartProductError
  | DeleteCart
  | DeleteCartSuccess
  | DeleteCartError;
