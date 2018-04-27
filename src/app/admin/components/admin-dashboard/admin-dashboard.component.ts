import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState, getProductsData } from '../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import * as RouterActions from './../../../core/+store/router/router.actions';

import {Observable} from 'rxjs/Observable';

import { IProduct } from '../../../shared/interfaces';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns = ['name', 'price', 'category', 'isAvailable', 'edit', 'delete'];
  dataSource$: Observable<IProduct[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.dataSource$ = this.store.pipe(select(getProductsData));
    this.store.dispatch(new ProductsActions.GetProducts());
  }

  addProduct(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['/admin/add']
    }));
  }

  deleteProduct(product: IProduct): void {
    this.store.dispatch(new ProductsActions.DeleteProduct(product.id));
  }

  editProduct(product: IProduct): void {
    const link = ['/admin/edit', product.id];
    this.store.dispatch(new RouterActions.Go({
      path: link
    }));
  }

}
