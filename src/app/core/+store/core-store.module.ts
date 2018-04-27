import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterStateSerializerProvider, routerReducers, RouterEffects } from '.';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment';


@NgModule(<NgModule>{
  imports: [
    StoreModule.forRoot(routerReducers),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([RouterEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [],
  providers: [RouterStateSerializerProvider]
})
export class CoreStoreModule { }
