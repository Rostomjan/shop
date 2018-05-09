import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IProduct, ECategories } from '../shared/interfaces';
import { ProductsAPIProvider } from './products.config';
import { ProductObservableService } from './product-observable.service';

describe('ProductObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsAPIProvider, ProductObservableService]
    });
  });

  it('should get products',
    inject([HttpTestingController, ProductObservableService],
      (httpMock: HttpTestingController, productObservableService: ProductObservableService) => {

      const mockProducts: IProduct[] = [{
        id: '883elrnbba',
        name: '',
        description: '',
        category: ECategories.vitamins,
        isAvailable: true,
        image: '',
        reviews: [],
        price: 18.05,
        brand: 'Life Extension',
        quantity: 4
        }, {
        id: 'c9kryl2ndyp',
        name: '',
        description: '',
        category: ECategories.protein,
        isAvailable: true,
        image: '',
        reviews: [],
        price: 21.74,
        brand: 'BSN',
        quantity: 1
        }, {
        id: 'e5p70482ucr',
        name: '',
        description: '',
        category: ECategories.minerals,
        isAvailable: true,
        image: '',
        reviews: [],
        price: 23.97,
        brand: 'Natural Vitality',
        quantity: 7
        }, {
        id: 'e5p70482ucr',
        name: '',
        description: '',
        category: ECategories.minerals,
        isAvailable: true,
        image: '',
        reviews: [],
        price: 23.97,
        brand: 'Natural Vitality',
        quantity: 7
      }];

      productObservableService.getProducts().subscribe((products: IProduct[]) => {
        expect(products).toEqual(mockProducts);
      });

      const mockReq = httpMock.expectOne(ProductsAPIProvider.useValue);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      expect(mockReq.request.method).toEqual('GET');

      mockReq.flush(mockProducts);
  }));

  it('should get product',
    inject([HttpTestingController, ProductObservableService],
      (httpMock: HttpTestingController, productObservableService: ProductObservableService) => {

      const mockProduct: IProduct = {
        id: '883elrnbba',
        name: '',
        description: '',
        category: ECategories.vitamins,
        isAvailable: true,
        image: '',
        reviews: [],
        price: 18.05,
        brand: 'Life Extension',
        quantity: 4
      };

      productObservableService.getProduct(mockProduct.id).subscribe((product: IProduct) => {
        expect(product).toEqual(mockProduct);
      });

      const mockReq = httpMock.expectOne(`${ProductsAPIProvider.useValue}/${mockProduct.id}`);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      expect(mockReq.request.method).toEqual('GET');

      mockReq.flush(mockProduct);
  }));

  it('should add product',
    inject([HttpTestingController, ProductObservableService],
      (httpMock: HttpTestingController, productObservableService: ProductObservableService) => {

      const mockProduct: IProduct = {
        id: '883elrnbba',
        name: '',
        description: '',
        category: ECategories.vitamins,
        isAvailable: true,
        image: '',
        reviews: [],
        price: 18.05,
        brand: 'Life Extension',
        quantity: 4
        };

      productObservableService.addProduct(mockProduct).subscribe((product: IProduct) => {
        expect(product).toEqual(mockProduct);
      });

      const mockReq = httpMock.expectOne(ProductsAPIProvider.useValue);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      expect(mockReq.request.method).toEqual('POST');

      mockReq.flush(mockProduct);
  }));

  it('should update product',
    inject([HttpTestingController, ProductObservableService],
      (httpMock: HttpTestingController, productObservableService: ProductObservableService) => {

      const mockProduct: IProduct = {
        id: '883elrnbba',
        name: '',
        description: '',
        category: ECategories.vitamins,
        isAvailable: true,
        image: '',
        reviews: [],
        price: 18.05,
        brand: 'Life Extension',
        quantity: 4
        };

      productObservableService.updateProduct(mockProduct).subscribe((product: IProduct) => {
        expect(product).toEqual(mockProduct);
      });

      const mockReq = httpMock.expectOne(`${ProductsAPIProvider.useValue}/${mockProduct.id}`);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      expect(mockReq.request.method).toEqual('PUT');

      mockReq.flush(mockProduct);
  }));

  it('should delete product',
    inject([HttpTestingController, ProductObservableService],
      (httpMock: HttpTestingController, productObservableService: ProductObservableService) => {

      const mockProduct: IProduct = {
        id: '883elrnbba',
        name: '',
        description: '',
        category: ECategories.vitamins,
        isAvailable: true,
        image: '',
        reviews: [],
        price: 18.05,
        brand: 'Life Extension',
        quantity: 4
      };

      productObservableService.deleteProduct(mockProduct.id).subscribe((index: string) => {
        expect(index).toEqual(mockProduct.id);
      });

      const mockReq = httpMock.expectOne(`${ProductsAPIProvider.useValue}/${mockProduct.id}`);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      expect(mockReq.request.method).toEqual('DELETE');

      mockReq.flush(mockProduct);
  }));

  it('should get error',
    inject([HttpTestingController, ProductObservableService],
      (httpMock: HttpTestingController, productObservableService: ProductObservableService) => {

      let response: any;
      let errResponse: any;
      const mockErrorResponse = {
        status: 404,
        statusText: 'Bad Request'
      };
      const data = 'Invalid request parameters';

      productObservableService.getProduct('invalid').subscribe(res => response = res, error => {
        errResponse = error;
        expect(errResponse).toBe(`Backend returned code 404, body was: ${data}`);
      });

      const mockReq = httpMock.expectOne(`${ProductsAPIProvider.useValue}/invalid`);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      expect(mockReq.request.method).toEqual('GET');

      mockReq.flush(data, mockErrorResponse);
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

});
