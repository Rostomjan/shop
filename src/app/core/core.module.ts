import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AuthGuard,
  AuthService,
  CartService,
  ConfigOptionsService,
  ConstantsService,
  GeneratorService,
  LocalStorageService,
  generateRandomSequence
} from '.';

@NgModule(<NgModule>{
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    CartService,
    ConfigOptionsService,
    {provide: ConstantsService, useValue: {app: 'ProductManager', ver: '1.0'}},
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
