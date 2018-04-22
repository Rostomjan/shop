import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/subscription';

import { Store, select } from '@ngrx/store';
import { AppState, ProductsState, getSelectedProductByUrl } from './../../../core/+store';
import * as RouterActions from './../../../core/+store/router/router.actions';

import { IProduct } from '../../../shared/interfaces';
import { CartPromiseService } from '../../../core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  @Output() added: EventEmitter<boolean> = new EventEmitter(true);
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
    this.added.emit(true);
  }

  showReviews() {
    this.store.dispatch(new RouterActions.Go({
      path: [{ outlets: { popup: 'reviews' } }]
    }));
  }
}
