import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import { IProduct } from '../../../shared/interfaces';

export interface ProductsState extends EntityState<IProduct> {
  error: Error | string;
}

export const productAdapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export const initialProductsState: ProductsState = productAdapter.getInitialState({
  error: null
});
