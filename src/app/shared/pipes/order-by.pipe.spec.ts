import { OrderByPipe } from './order-by.pipe';
import { IProduct, ECategories } from '../interfaces';

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

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('should be empty', () => {
    expect(pipe.transform([], 'price')).toEqual([]);
  });

  it('should sort by price in asc order', () => {
    const actual = pipe.transform(mockProducts, 'price', true);
    expect(actual[0].price).toBe(18.05);
  });

  it('should sort by price in desc order', () => {
    const actual = pipe.transform(mockProducts, 'price', false);
    expect(actual[0].price).toBe(23.97);
  });

  it('should sort by quantity in asc order', () => {
    const actual = pipe.transform(mockProducts, 'quantity', true);
    expect(actual[0].quantity).toBe(1);
  });

  it('should sort by quantity in desc order', () => {
    const actual = pipe.transform(mockProducts, 'quantity', false);
    expect(actual[0].quantity).toBe(7);
  });

  it('should sort by brand in asc order', () => {
    const actual = pipe.transform(mockProducts, 'brand', true);
      expect(actual[0].brand).toBe('BSN');
  });

  it('should sort by brand in desc order', () => {
    const actual = pipe.transform(mockProducts, 'brand', false);
    expect(actual[0].brand).toBe('Natural Vitality');
  });
});
