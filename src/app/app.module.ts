import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent, ProductListComponent, CartComponent } from './components';
import { CartService, ProductsService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
