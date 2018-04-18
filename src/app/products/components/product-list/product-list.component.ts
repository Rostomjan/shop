import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { IProduct } from '../../../shared/interfaces';
import { ProductObservableService } from '../../product-observable.service';
import { CartPromiseService, AppSettingService } from '../../../core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() added: EventEmitter<boolean> = new EventEmitter(true);

  products$: Observable<IProduct[]>;

  constructor(
    private productObservableService: ProductObservableService,
    private cartPromiseService: CartPromiseService,
    private appSettingService: AppSettingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products$ = this.productObservableService.getProducts();

    this.appSettingService.load().subscribe();
  }

  onBuy(product: IProduct): void {
    this.cartPromiseService.addToCart(product);
    this.added.emit(true);
  }

  onDetail(product: IProduct): void {
    const link = ['/products', product.id];
    this.router.navigate(link);
  }
}
