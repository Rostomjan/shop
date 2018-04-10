import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CartListComponent, CartItemComponent, CartComponent, CheckoutComponent } from './components';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartItemComponent,
    CheckoutComponent
  ],
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  exports: [CartComponent],
  providers: []
})
export class CartModule { }
