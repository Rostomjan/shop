import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { ProductObservableService } from '../../../products/product-observable.service';
import { IProduct, Product } from '../../../shared/interfaces';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  product: IProduct = new Product(null, null, null, null, null, null, null, null, null);
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productObservableService: ProductObservableService,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(
        (params: Params) => params.get('productId')
          ? this.productObservableService.getProduct(params.get('productId'))
          : of(null)
        )
      )
      .subscribe(
        (product: IProduct) => {
          return this.product = product ? product : new Product(null, null, null, null, null, null, null, null, null);
        },
        err => console.log(err)
      );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  goBack(e: MouseEvent): void {
    e.preventDefault();
    this.router.navigate(['/admin']);
  }

  saveProduct(e: MouseEvent): void {
    e.preventDefault();
    const product: IProduct = {...this.product};
    const method: string = product.id ? 'updateProduct' : 'addProduct';
    this.sub = this.productObservableService[method](product)
      .subscribe(
        () => {
          product.id
            ? this.router.navigate(['admin'])
            : this.goBack(e);
        },
        error => console.log(error)
      );
  }
}
