import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './cart.service';
import { ConfigOptionsService, ConstantsService, GeneratorService, LocalStorageService, generateRandomSequence } from './services';

@NgModule(<NgModule>{
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CartService,
    ConfigOptionsService,
    {provide: ConstantsService, useValue: {App: 'ProductManager', Ver: '1.0'}},
    {provide: GeneratorService, useValue: generateRandomSequence(10)},
    LocalStorageService
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded.');
    }
  }
 }
