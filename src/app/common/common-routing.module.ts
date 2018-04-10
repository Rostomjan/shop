import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AdminModule } from '../admin/admin.module';
import { LoginComponent, PageNotFoundComponent } from './components';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    // loadChildren: () => AdminModule,
    data: { title: 'Admin' }
  },
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
