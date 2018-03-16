import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../interfaces';
import { ProductsService, CartService } from '../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  @Output() added: EventEmitter<boolean> = new EventEmitter(true);

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: Product): void {
    this.cartService.addToCart(product);
    this.added.emit(true);
  }

}
