import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CommonRoutingModule } from './common-routing.module';
import { LoginComponent, PageNotFoundComponent, HeaderComponent, FooterComponent } from './components';

@NgModule({
  imports: [
    SharedModule,
    CommonRoutingModule
  ],
  declarations: [LoginComponent, PageNotFoundComponent, HeaderComponent, FooterComponent],
  exports: [LoginComponent, PageNotFoundComponent, HeaderComponent, FooterComponent]
})
export class CommonModules { }
