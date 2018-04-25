import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/subscription';

import { Store, select } from '@ngrx/store';
import { AppState, getSelectedProductByUrl } from '../../../core/+store';
import * as RouterActions from './../../../core/+store/router/router.actions';

import { IProduct } from '../../../shared/interfaces';
import { CartPromiseService } from '../../../core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: IProduct;
  sub: Subscription;

  constructor(
    private cartPromiseService: CartPromiseService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.sub = this.store.pipe(select(getSelectedProductByUrl))
      .subscribe(el => this.product = el);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  buy(): void {
    this.cartPromiseService.addToCart(this.product);
  }

  showReviews() {
    this.store.dispatch(new RouterActions.Go({
      path: [{ outlets: { popup: 'reviews' } }]
    }));
  }
}
