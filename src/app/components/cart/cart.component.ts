import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces';
import { CartService } from '../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.recieveCartProducts();
  }

  onCartUpdate() {
    this.products = this.cartService.recieveCartProducts();
  }

}
