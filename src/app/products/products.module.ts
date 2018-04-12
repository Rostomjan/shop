import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import {
  ProductListComponent,
  ProductComponent,
  ProductDetailComponent,
  ReviewsComponent,
  TestCoreServicesComponent
} from './components';
import { ProductService } from './products.service';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailComponent,
    ReviewsComponent,
    TestCoreServicesComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    TestCoreServicesComponent
  ],
  providers: [ProductService]
})
export class ProductsModule { }
