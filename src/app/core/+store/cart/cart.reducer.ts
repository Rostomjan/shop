import { CartActions, CartActionTypes } from './cart.actions';
import { CartState, initialCartState } from './cart.state';

export function cartReducer(state = initialCartState, action: CartActions): CartState {
  switch (action.type) {
    case CartActionTypes.GET_CART: {
      return {
        ...state,
        loading: true
      };
    }

    case CartActionTypes.GET_CART_SUCCESS: {
      const { products: entities, total, len } = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
        total,
        len
      };
    }

    case CartActionTypes.ADD_TO_CART: {
      return {
        ...state,
        loading: true
      };
    }

    case CartActionTypes.ADD_TO_CART_SUCCESS: {
      const { products: entities, total, len } = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
        total,
        len
      };
    }

    case CartActionTypes.UPDATE_CART: {
      return {
        ...state,
        loading: true
      };
    }

    case CartActionTypes.UPDATE_CART_SUCCESS: {
      const { products: entities, total, len } = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
        total,
        len
      };
    }

    case CartActionTypes.DELETE_CART_PRODUCT: {
      return { ...state };
    }

    case CartActionTypes.DELETE_CART_PRODUCT_SUCCESS: {
      const { products: entities, total, len } = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
        total,
        len
      };
    }

    case CartActionTypes.DELETE_CART: {
      return { ...state };
    }

    case CartActionTypes.DELETE_CART_SUCCESS: {
      const { products: entities, total, len } = action.payload;
      return {
        ...state,
        entities,
        total,
        len
      };
    }

    case CartActionTypes.GET_CART_ERROR:
    case CartActionTypes.UPDATE_CART_ERROR:
    case CartActionTypes.DELETE_CART_PRODUCT_ERROR:
    case CartActionTypes.DELETE_CART_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }

    default:
      return state;
  }
}
