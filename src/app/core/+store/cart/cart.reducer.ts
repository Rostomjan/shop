import { Action } from '@ngrx/store';

import { CartActions, CartActionTypes } from './cart.actions';
import { CartState, initialCartState } from './cart.state';
import { IProduct } from '../../../shared/interfaces';

export const initialState = {

};

export function cartReducer(state = initialCartState, action: CartActions): CartState {
  switch (action.type) {
    case CartActionTypes.GET_CART: {
      return { ...state };
    }

    case CartActionTypes.GET_CART_SUCCESS: {
      const data = [...<IProduct[]>action.payload.products];
      return { ...state, data };
    }

    case CartActionTypes.GET_CART_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }

    case CartActionTypes.DELETE_CART: {
      return { ...state };
    }

    case CartActionTypes.DELETE_CART_SUCCESS: {
      const data = {...<IProduct>action.payload};
      return { ...state };
    }

    case CartActionTypes.DELETE_CART_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }

    default:
      return state;
  }
}
