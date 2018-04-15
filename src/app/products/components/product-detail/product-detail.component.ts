import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { IProduct, Product } from '../../../shared/interfaces';
import { ProductService } from '../../products.service'; // ---------------------------
import { ProductObservableService } from '../../product-observable.service';
import { CartPromiseService } from '../../../core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Output() added: EventEmitter<boolean> = new EventEmitter(true);
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductService,  // ---------------------------
    private productObservableService: ProductObservableService,
    private cartPromiseService: CartPromiseService
  ) { }

  ngOnInit() {
    this.product = new Product(null, null, null, null, null, null, null, null, null);

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productObservableService.getProduct(params.get('productId')))
      )
      .subscribe(
        product => this.product = product,
        err => console.log(err)
      );
  }

  buy(): void {
    this.cartPromiseService.addToCart(this.product);
    this.added.emit(true);
  }

  showReviews() {
    this.router.navigate([{ outlets: { popup: 'reviews' } }]);
  }
}
