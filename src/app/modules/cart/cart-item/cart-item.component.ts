import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

import { IProduct } from '../../shared/interfaces';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: IProduct;
  @Output() changedQty: EventEmitter<{product: IProduct, qty: number}> = new EventEmitter<{product: IProduct, qty: number}>();
  @Output() removed: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  @HostBinding('class') attrClass;

  @HostListener('mouseover', ['event'])
  hovered(): void {
    this.attrClass = 'active';
  }

  @HostListener('mouseleave', ['event'])
  leaved(): void {
    this.attrClass = '';
  }

  constructor() { }

  ngOnInit() {
  }

  onChangeQty(qty: number): void {
    this.changedQty.emit({product: this.product, qty: +qty});
  }

  remove() {
    this.removed.emit(this.product);
  }
}
