import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';

import { ProductComponent } from './product.component';
import { IProduct, ECategories } from '../../../shared/interfaces';

describe('ProductComponent', () => {
  let component: ProductComponent,
    fixture: ComponentFixture<ProductComponent>,
    productElm: DebugElement;
  const expectedProduct: IProduct = {
    id: '883elrnbba',
    name: 'Life Extension, Two-Per-Day Capsules, 120 Capsules',
    description: 'Life Extension’s Two Per Day multivitamins have the highest nutritional potencies of any science-based multivitamin',
    price: 18.05,
    category: ECategories.vitamins,
    isAvailable: true,
    brand: 'Life Extension',
    image: 'https://s3.images-iherb.com/lex/lex22141/l/1.jpg',
    reviews: []
  };

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = expectedProduct;
    productElm = fixture.debugElement.query(By.css('.product-list'));

    fixture.detectChanges();
  });

  it('should display uppercase title', () => {
    const productSubTitle = <DebugElement>productElm.childNodes.find((el: DebugElement) => el.name === 'mat-card-subtitle');

    expect(productSubTitle.nativeElement.textContent).toBe('Category: VITAMINS');
  });

  it('should raise selected event when clicked', () => {
    let selectedProduct: IProduct;
    const matCardAction = <DebugElement>productElm.childNodes.find((el: DebugElement) => el.name === 'mat-card-actions');
    const btn = <DebugElement>matCardAction.childNodes.find((el: DebugElement) => el.name === 'button');

    component.selected.subscribe(product => selectedProduct = product);
    btn.triggerEventHandler('click', null);

    expect(selectedProduct).toBe(expectedProduct);
  });

  it('should raise detailed event when clicked', () => {
    let selectedProduct: IProduct;
    const image = <DebugElement>productElm.childNodes.find((el: DebugElement) => el.name === 'img' );

    component.detailed.subscribe(product => selectedProduct = product);
    image.triggerEventHandler('click', null);

    expect(selectedProduct).toBe(expectedProduct);
  });
});
