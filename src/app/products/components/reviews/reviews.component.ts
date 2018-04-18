import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { ProductObservableService } from '../../product-observable.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: Array<{name: string, msg: string}> | boolean;

  constructor(
    private router: Router,
    private productObservableService: ProductObservableService,
  ) { }

  ngOnInit() {
    if (this.router.url.includes('/products/')) {
      const id = this.router.url.split('/products/').join('').split('(')[0];
      this.productObservableService.getProducts()
        .pipe(
          map(products => products.find(el => el.id === id)),
          catchError(() => Observable.throw('There are not any reviews'))
        )
        .subscribe(product => this.reviews = product ? product.reviews : false);
    }
  }
}
