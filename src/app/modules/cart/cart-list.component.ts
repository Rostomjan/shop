import { Component, OnInit } from '@angular/core';

import { IProduct } from '../shared/interfaces';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: IProduct[];
  len: number;
  total: number;
  panelOpenState = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.receiveCartProducts();
    this.len = this.cartService.getQuantity(this.products);
    this.total = this.cartService.getTotal(this.products);
  }

  onCartUpdate(): void {
    this.products = this.cartService.receiveCartProducts();
    this.len = this.cartService.getQuantity(this.products);
    this.total = this.cartService.getTotal(this.products);
  }

  onchangedQty(): void {
    this.products = this.cartService.receiveCartProducts();
    this.len = this.cartService.getQuantity(this.products);
    this.total = this.cartService.getTotal(this.products);
  }

  onRemove(product: IProduct): void {
    this.products = this.cartService.removeProduct(product);
    this.len = this.cartService.getQuantity(this.products);
    this.total = this.cartService.getTotal(this.products);
  }

}
