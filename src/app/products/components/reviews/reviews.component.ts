import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../products.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
reviews: Array<{name: string, msg: string}>;

  constructor(
    private router: Router,
    private productsService: ProductService
  ) { }

  ngOnInit() {
    if (this.router.url.includes('/products/')) {
      const id = this.router.url.split('/products/').join('').split('(')[0];
      this.productsService.getProducts()
        .then(products => this.reviews = products.find(el => el.id === id).reviews);
    }
  }
}
