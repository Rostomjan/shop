import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductService } from './products.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [ProductService]
})
export class ProductsModule { }
