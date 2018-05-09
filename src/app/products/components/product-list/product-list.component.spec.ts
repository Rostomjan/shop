import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppState, getProductsData } from '../../../core/+store';
import { ProductsEffects, productsReducer } from '../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import * as RouterActions from './../../../core/+store/router/router.actions';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProductObservableService } from '../../product-observable.service';
import { ProductsAPIProvider } from '../../products.config';

import { ProductListComponent } from './product-list.component';
import { ProductComponent } from '../product/product.component';
import { IProduct, ECategories } from '../../../shared/interfaces';
import { CartPromiseService, AppSettingService } from '../../../core';

class CartPromiseServiceStub {
  addToCart(product: IProduct) {}
}

class AppSettingServiceStub {
  load(product: IProduct): Observable<any> { return of(null); }
}

describe('ProductListComponent', () => {
  let component: ProductListComponent,
    fixture: ComponentFixture<ProductListComponent>,
    store: Store<AppState>;

  const expectedProducts: IProduct[] = [{
    id: '883elrnbba',
    name: 'Life Extension, Two-Per-Day Capsules, 120 Capsules',
    description: 'Life Extension’s Two Per Day multivitamins have the highest nutritional potencies of any science-based multivitamin',
    price: 18.05,
    category: ECategories.vitamins,
    isAvailable: true,
    brand: 'Life Extension',
    image: 'https://s3.images-iherb.com/lex/lex22141/l/1.jpg',
    reviews: []
  }, {
    id: 'e5p70482ucr',
    name: 'Natural Vitality, Natural Calm, The Anti-Stress Drink',
    description: 'Magnesium and calcium are fundamental nutrients that need to be in balance with each other in order for you',
    price: 23.97,
    category: ECategories.minerals,
    isAvailable: true,
    brand: 'Natural Vitality',
    image: 'https://s3.images-iherb.com/ptg/ptg00002/l/13.jpg',
    reviews: []
  }];

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent, ProductListComponent],
      providers: [
        { provide: CartPromiseService, useClass: CartPromiseServiceStub },
        { provide: AppSettingService, useClass: AppSettingServiceStub },
        ProductsAPIProvider, ProductObservableService],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('products', productsReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ProductsEffects]),
      ],
      schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture.detectChanges();
  });

  it('should dispatch an action to get products when created', () => {
    const action = new ProductsActions.GetProducts();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });


  it('should compare length of sent and received products', () => {
    let selectedProducts: IProduct[];
    const action = new ProductsActions.GetProductsSuccess(expectedProducts);

    store.dispatch(action);
    component.products$.subscribe(products => selectedProducts = products);

    expect(selectedProducts.length).toEqual(expectedProducts.length);
  });
});
