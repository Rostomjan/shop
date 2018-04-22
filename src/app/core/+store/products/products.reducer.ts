import { productAdapter, ProductsState, initialProductsState } from './products.state';
import { ProductsActionTypes } from './products.actions';

import { IProduct } from '../../../shared/interfaces';

export function productsReducer(
  state = initialProductsState,
  action: ProductsState
): ProductsState {

  switch (action.type) {

    case ProductsActionTypes.GET_PRODUCTS: {
      return {
        ...state,
      };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      const products = [...<Array<IProduct>>action.payload];

      return productAdapter.addAll(products, {...state});
    }


    case ProductsActionTypes.GET_PRODUCTS_ERROR: {
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
      const product = { ...<IProduct>action.payload };

      return productAdapter.addOne(product, state);
    }

    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      const product = { ...<IProduct>action.payload };

      return productAdapter.updateOne({
          id: product.id,
          changes: product
      }, state);
    }

    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS: {
      const id = action.payload;

      return productAdapter.removeOne(id, state);
    }

    case ProductsActionTypes.CREATE_PRODUCT_ERROR:
    case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
    case ProductsActionTypes.DELETE_PRODUCT_ERROR: {
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    default: {
      return state;
    }
  }
}
