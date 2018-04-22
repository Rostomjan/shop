import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects, productsReducer } from './../core/+store';

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
    ProductsRoutingModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    TestCoreServicesComponent
  ],
  providers: [ProductsAPIProvider, ProductObservableService]
})
export class ProductsModule { }
