import { Component, OnInit } from '@angular/core';

import { IProduct } from '../shared/interfaces';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: Promise<IProduct[]>;
  len: number;
  total: number;
  panelOpenState = false;

  constructor(private cartService: CartService) { }

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
}
