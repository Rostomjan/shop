import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductService } from './products.service';
import { TestCoreServicesComponent } from './test-core-services/test-core-services.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    TestCoreServicesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponent,
    TestCoreServicesComponent
  ],
  providers: [ProductService]
})
export class ProductsModule { }
