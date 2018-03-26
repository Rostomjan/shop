import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CartListComponent } from './cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartEmptyComponent } from './cart-empty/cart-empty.component';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartEmptyComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [CartListComponent, CartEmptyComponent],
  providers: []
})
export class CartModule { }
