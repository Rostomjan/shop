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
import { ProductObservableService } from './product-observable.service';
import { ProductsAPIProvider } from './products.config';
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
  providers: [ProductService, ProductsAPIProvider, ProductObservableService]
})
export class ProductsModule { }
