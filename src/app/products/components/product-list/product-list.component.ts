import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState, ProductsState, getTasksData } from './../../../core/+store';
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
  @Output() added: EventEmitter<boolean> = new EventEmitter(true);

  products$: Observable<ReadonlyArray<IProduct>>;

  constructor(
    private cartPromiseService: CartPromiseService,
    private appSettingService: AppSettingService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(getTasksData));
    this.store.dispatch(new ProductsActions.GetProducts());
    this.appSettingService.load().subscribe();
  }

  onBuy(product: IProduct): void {
    this.cartPromiseService.addToCart(product);
    this.added.emit(true);
  }

  onDetail(product: IProduct): void {
    const link = ['/products', product.id];
    this.store.dispatch(new RouterActions.Go({
      path: link
    }));
  }
}
