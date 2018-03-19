import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/interfaces';
import { CartService } from '../../shared/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.receiveCartProducts();
  }

  onCartUpdate() {
    this.products = this.cartService.receiveCartProducts();
  }

}
