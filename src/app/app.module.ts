import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { AppRoutes } from './app.routes';
import { AdminModule } from './admin/admin.module';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { CommonModules } from './common/common.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductsModule,
    CartModule,
    AdminModule,

    CommonModules
    // AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
