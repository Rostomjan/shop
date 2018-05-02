import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.actions';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { pluck, switchMap, concatMap, map, catchError } from 'rxjs/operators';

import { ProductObservableService } from '../../../products/product-observable.service';
import { IProduct } from '../../../shared/interfaces';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productObservableService: ProductObservableService
  ) { }

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.GetProducts>(ProductsActions.ProductsActionTypes.GET_PRODUCTS),
    switchMap(() =>
        this.productObservableService
          .getProducts()
          .pipe(
            map(products => new ProductsActions.GetProductsSuccess(products)),
            catchError(err => of(new ProductsActions.GetProductsError(err)))
          )
    )
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.UpdateProduct>(ProductsActions.ProductsActionTypes.UPDATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: IProduct) =>
        this.productObservableService
          .updateProduct(payload)
          .pipe(
            map(product => new ProductsActions.UpdateProductSuccess(product)),
            catchError(err => of(new ProductsActions.UpdateProductError(err)))
          )
    )
  );

  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.CreateProduct>(ProductsActions.ProductsActionTypes.CREATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: IProduct) =>
        this.productObservableService
          .addProduct(payload)
          .pipe(
            map(product => new ProductsActions.CreateProductSuccess(product)),
            catchError(err => of(new ProductsActions.CreateProductError(err)))
          )
    )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.DeleteProduct>(ProductsActions.ProductsActionTypes.DELETE_PRODUCT),
    pluck('payload'),
    concatMap((payload: string) =>
        this.productObservableService
          .deleteProduct(payload)
          .pipe(
            map(products => new ProductsActions.DeleteProductSuccess(products)),
            catchError(err => of(new ProductsActions.DeleteProductError(err)))
          )
    )
  );
}
