import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState, getProductsData } from '../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import * as RouterActions from './../../../core/+store/router/router.actions';

import { Observable } from 'rxjs/Observable';

import { IProduct } from '../../../shared/interfaces';
import { CartPromiseService, AppSettingService } from '../../../core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Array<IProduct>>;

  constructor(
    private cartPromiseService: CartPromiseService,
    private appSettingService: AppSettingService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProductsData));
    this.store.dispatch(new ProductsActions.GetProducts());
    this.appSettingService.load().subscribe();
  }

  onBuy(product: IProduct): void {
    this.cartPromiseService.addToCart(product);
  }

  onDetail(product: IProduct): void {
    const link = ['/products', product.id];
    this.store.dispatch(new RouterActions.Go({
      path: link
    }));
  }
}
