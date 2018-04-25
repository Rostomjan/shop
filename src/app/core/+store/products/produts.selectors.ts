import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterState } from '../router';
import { productAdapter, ProductsState } from './products.state';

import { IProduct, Product } from '../../../shared/interfaces';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const {
  selectEntities: getProductsEntities,
  selectAll: getProductsData
} = productAdapter.getSelectors(getProductsState);

export const getSelectedProductByUrl = createSelector(
  getProductsEntities,
  getRouterState,
  (products, router): IProduct => {
      const productId = router.state.params.productId;
      if (productId) {
          return products[productId];
      } else {
          return new Product(null, null, null, null, null, null, null, null, null, null);
      }
});
