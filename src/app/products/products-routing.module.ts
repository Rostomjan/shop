import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent, ProductDetailComponent, ReviewsComponent } from './components';

const routes: Routes = [{
  path: 'home',
  component: ProductListComponent,
  data: { title: 'Home'}
}, {
  path: 'products/:productId',
  component: ProductDetailComponent
}, {
  path: 'reviews',
  component: ReviewsComponent,
  outlet: 'popup'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
