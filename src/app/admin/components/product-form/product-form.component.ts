import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState, ProductsState, getSelectedProductByUrl } from './../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import * as RouterActions from './../../../core/+store/router/router.actions';

import { Subscription } from 'rxjs/Subscription';

import { IProduct } from '../../../shared/interfaces';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  product: IProduct;

  private sub: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.sub = this.store.pipe(select(getSelectedProductByUrl)).subscribe(el => this.product = el);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  goBack(): void {
    this.store.dispatch(new RouterActions.Back());
  }

  saveProduct(): void {
    const product: IProduct = {...this.product};
    product.id
      ? this.store.dispatch(new ProductsActions.UpdateProduct(product))
      : this.store.dispatch(new ProductsActions.CreateProduct(product));
    product.id
      ? this.store.dispatch(new RouterActions.Go({ path: ['admin'] }))
      : this.goBack();
  }
}
