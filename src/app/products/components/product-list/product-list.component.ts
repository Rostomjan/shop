import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { IProduct } from '../../../shared/interfaces';
import { ProductService } from '../../products.service';
import { CartService } from '../../../core/';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() added: EventEmitter<boolean> = new EventEmitter(true);

  products$: Observable<IProduct[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  onBuy(product: IProduct): void {
    this.cartService.addToCart(product);
    this.added.emit(true);
  }

  onDetail(product: IProduct): void {
    const link = ['/products', product.id];
    this.router.navigate(link);
  }
}
