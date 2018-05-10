import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartListComponent, ProcessOrderComponent, CartComponent } from './components';

const routes: Routes = [{
  path: 'cart',
  component: CartComponent,
  data: { title: 'Cart' },
  children: [{
    path: '',
    component: CartListComponent
  }, {
    path: 'checkout',
    component: ProcessOrderComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
