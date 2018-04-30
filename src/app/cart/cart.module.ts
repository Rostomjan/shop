import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects, cartReducer } from './../core/+store';

import { SharedModule } from '../shared/shared.module';

import { CartListComponent, CartItemComponent, CartComponent, ProcessOrderComponent } from './components';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartItemComponent,
    ProcessOrderComponent
  ],
  imports: [
    SharedModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects]),
  ],
  exports: [CartComponent],
  providers: []
})
export class CartModule { }
