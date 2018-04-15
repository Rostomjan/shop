import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { ProductService } from '../../../products/products.service';    // ---------------------------
import { ProductObservableService } from '../../../products/product-observable.service';
import { IProduct, Product } from '../../../shared/interfaces';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product: IProduct = new Product(null, null, null, null, null, null, null, null, null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productObservableService: ProductObservableService,
    private productService: ProductService    // ---------------------------
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
        product => {
          return this.product = product ? product : new Product(null, null, null, null, null, null, null, null, null);
        },
        err => console.log(err)
      );
  }

  goBack(e: MouseEvent): void {
    e.preventDefault();
    this.router.navigate(['/admin']);
  }

  saveProduct(e: MouseEvent): void {
    e.preventDefault();
    if (this.product.id) {
      this.productObservableService.updateProduct(this.product);
      this.router.navigate(['admin']);
    } else {
      this.productObservableService.addProduct(this.product);
      this.goBack(e);
    }

  }
}
