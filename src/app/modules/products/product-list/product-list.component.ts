import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../../shared/interfaces';
import { ProductService } from '../products.service';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() added: EventEmitter<boolean> = new EventEmitter(true);

  products: IProduct[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuy(product: IProduct): void {
    this.cartService.addToCart(product);
    this.added.emit(true);
  }

}
