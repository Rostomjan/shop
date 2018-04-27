import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CartState } from './cart.state';

const getEntities = (state: CartState) => state.entities;
const getTotal = (state: CartState) => state.total;
const getLen = (state: CartState) => state.len;
const getLoaded = (state: CartState) => state.loaded;
const getLoading = (state: CartState) => state.loading;
const getError = (state: CartState) => state.error;

export const getCartState = createFeatureSelector<CartState>('cart');

const getCartEntities = createSelector(getCartState, getEntities);
export const getCartTotal = createSelector(getCartState, getTotal);
export const getCartLen = createSelector(getCartState, getLen);
export const getCartLoaded = createSelector(getCartState, getLoaded);
export const getCartLoading = createSelector(getCartState, getLoading);
export const getCartError = createSelector(getCartState, getError);

export const getCart = createSelector(getCartEntities, entities => {
  return Object.keys(entities).map(id => entities[+id]);
});
