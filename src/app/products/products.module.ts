import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import {
  ProductListComponent,
  ProductComponent,
  ProductDetailComponent,
  ReviewsComponent,
  TestCoreServicesComponent
} from './components';

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
  providers: [ProductsAPIProvider, ProductObservableService]
})
export class ProductsModule { }
