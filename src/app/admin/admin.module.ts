import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent, AdminDashboardComponent, ProductFormComponent } from './components';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent, ProductFormComponent]
})
export class AdminModule { }
