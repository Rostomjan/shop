import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct, Product } from '../../../shared/interfaces';
import { ProductService } from '../../../products/products.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns = ['name', 'price', 'category', 'quantity', 'edit', 'delete'];
  dataSource: Promise<IProduct[]>;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.dataSource = this.productService.getProducts();
  }

  addProduct() {
    this.router.navigate(['/admin/add']);
  }

  deleteProduct(product) {
    console.log('deleteProduct is ', product);
  }

  editProduct(product) {
    console.log('editProduct is ', product);
    const link = ['/admin/edit', product.id];
    this.router.navigate(link);
  }

}
