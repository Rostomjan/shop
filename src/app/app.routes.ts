// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { LoginComponent, PageNotFoundComponent, HeaderComponent, FooterComponent } from './common/components';
// import { ProductListComponent, ProductComponent, TestCoreServicesComponent } from './products/components';

// const routes: Routes = [
//   {
//     path: 'login',
//     component: LoginComponent,
//     data: { title: 'Login' }
//   },
//   {
//     path: 'cart',
//     loadChildren: 'app/cart/cart.module#CartModule',
//     data: { title: 'Cart' }
//   },
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },
//   {
//     path: '**',
//     component: PageNotFoundComponent,
//     data: { title: 'Page Not Found' }
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutes {}
