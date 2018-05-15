import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AppSettingService,
  AuthGuard,
  AuthService,
  CartPromiseService,
  ConfigOptionsService,
  ConstantsService,
  GeneratorService,
  LocalStorageService,
  generateRandomSequence
} from '.';

import { CoreStoreModule } from './+store/core-store.module';

@NgModule(<NgModule>{
  imports: [
    CommonModule,
    CoreStoreModule
  ],
  declarations: [],
  providers: [
    AppSettingService,
    AuthGuard,
    AuthService,
    CartPromiseService,
    ConfigOptionsService,
    {provide: ConstantsService, useValue: {app: 'ProductManager', ver: '1.0'}},
    {provide: GeneratorService, useFactory: () => generateRandomSequence(10)},
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
