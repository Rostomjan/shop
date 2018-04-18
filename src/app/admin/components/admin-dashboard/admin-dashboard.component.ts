import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';

import { IProduct } from '../../../shared/interfaces';
import { ProductObservableService } from '../../../products/product-observable.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns = ['name', 'price', 'category', 'isAvailable', 'edit', 'delete'];
  dataSource$: Observable<IProduct[]>;

  constructor(
    private router: Router,
    private productObservableService: ProductObservableService,
  ) { }

  ngOnInit() {
    this.dataSource$ = this.productObservableService.getProducts();
  }

  addProduct(): void {
    this.router.navigate(['/admin/add']);
  }

  deleteProduct(product: IProduct): void {
    this.dataSource$ = this.productObservableService.deleteProduct(product.id);
  }

  editProduct(product: IProduct): void {
    const link = ['/admin/edit', product.id];
    this.router.navigate(link);
  }

}
