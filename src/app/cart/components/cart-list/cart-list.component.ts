import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from '../../../shared/interfaces';
import { CartService, LocalStorageService } from '../../../core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: Promise<IProduct[]>;
  len: number;
  total: number;

  constructor(
    private router: Router,
    private cartService: CartService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    ( { products: this.products, len: this.len, total: this.total } = this.cartService.receiveCartProducts() );
  }

  onCartUpdate(): void {
    ( { products: this.products, len: this.len, total: this.total } = this.cartService.receiveCartProducts() );
  }

  onChangedQty({product, qty}): void {
    ( { products: this.products, len: this.len, total: this.total } = this.cartService.changeQuantity(product, qty) );
  }

  onRemove(product: IProduct): void {
    ( { products: this.products, len: this.len, total: this.total } = this.cartService.removeProduct(product) );
  }

  clearCart(): void {
    this.cartService.removeAll();
    [this.len, this.total, this.products] = [0, 0, new Promise(resolve => resolve([]))];
  }

  checkout() {
    this.products.then(items => {
      const ordered = items;
      this.localStorageService.setItem('order-' + Math.random().toString(36).substr(7), JSON.stringify(ordered));
    });
    this.router.navigate(['/cart//checkout']);
  }
}
