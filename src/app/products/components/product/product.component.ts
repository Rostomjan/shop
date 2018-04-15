import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../../../shared/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  @Output() selected: EventEmitter<IProduct> = new EventEmitter();
  @Output() detailed: EventEmitter<IProduct> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buy() {
    this.selected.emit(this.product);
  }

  detail() {
    this.detailed.emit(this.product);
  }
}
