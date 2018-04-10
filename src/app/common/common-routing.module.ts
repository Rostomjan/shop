import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, PageNotFoundComponent, HeaderComponent, FooterComponent } from './components';
import { ProductListComponent, ProductComponent, TestCoreServicesComponent } from '../products/components';
import { CartListComponent, CartItemComponent, CartComponent } from '../cart/components';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  // {
  //   path: 'admin',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  //   data: { title: 'Admin' }
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule {}
