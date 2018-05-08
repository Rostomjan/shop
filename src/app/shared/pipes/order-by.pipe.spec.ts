import { OrderByPipe } from './order-by.pipe';
import { IProduct, ECategories } from '../interfaces';

const products: IProduct[] = [{
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

  it('empty', () => {
    expect(pipe.transform([], 'price')).toEqual([]);
  });

  it('incrementing order by price', () => {
    const actual = pipe.transform(products, 'price', true);
    expect(actual[0].price).toBe(18.05);
  });

  it('decrementing order by price', () => {
    const actual = pipe.transform(products, 'price', false);
    expect(actual[0].price).toBe(23.97);
  });

  it('incrementing order by quantity', () => {
    const actual = pipe.transform(products, 'quantity', true);
    expect(actual[0].quantity).toBe(1);
  });

  it('decrementing order by quantity', () => {
    const actual = pipe.transform(products, 'quantity', false);
    expect(actual[0].quantity).toBe(7);
  });

  it('incrementing order by brand', () => {
    const actual = pipe.transform(products, 'brand', true);
      expect(actual[0].brand).toBe('BSN');
  });

  it('decrementing order by brand', () => {
    const actual = pipe.transform(products, 'brand', false);
    expect(actual[0].brand).toBe('Natural Vitality');
  });
});
