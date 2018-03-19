import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartComponent } from './cart.component';
import { CartService } from '../../shared/services';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CartComponent],
  providers: [CartService]
})
export class CartModule { }
