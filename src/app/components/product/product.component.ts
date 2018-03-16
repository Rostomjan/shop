import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() selected: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buy() {
    this.selected.emit(this.product);
  }
}
