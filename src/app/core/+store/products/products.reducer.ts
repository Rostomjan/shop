import { productAdapter, ProductsState, initialProductsState } from './products.state';
import { ProductsActionTypes, ProductsActions } from './products.actions';

import { IProduct } from '../../../shared/interfaces';

export function productsReducer(
  state = initialProductsState,
  action: ProductsActions
): ProductsState {

  switch (action.type) {

    case ProductsActionTypes.GET_PRODUCTS: {
      return { ...state };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      const products = [...<IProduct[]>action.payload];
      return productAdapter.addAll(products, {...state});
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

    case ProductsActionTypes.GET_PRODUCTS_ERROR:
    case ProductsActionTypes.CREATE_PRODUCT_ERROR:
    case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
    case ProductsActionTypes.DELETE_PRODUCT_ERROR: {
      const error = action.payload;
      console.log(`${action.type} error: `, error);
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
