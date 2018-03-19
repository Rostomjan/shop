import { Injectable } from '@angular/core';

import { Product, ECategories } from '../../shared/interfaces';

@Injectable()
export class ProductsService {

  readonly products: Product[] = [{
    name: 'Life Extension, Two-Per-Day Capsules, 120 Capsules',
    description: `Thise multivitamins have the highest nutritional potencies of any science-based multivitamin formula.`,
    price: 18.00,
    category: ECategories.vitamins,
    isAvailable: true,
    brand: 'Life Extension',
    image: 'https://s3.images-iherb.com/lex/lex22141/l/1.jpg',
  }, {
    name: 'Muscletech, NitroTech, Whey Peptides',
    description: `Nitro-Tech is a scientifically engineered whey + isolate lean musclebuilder formula designed for all athletes.`,
    price: 57.42,
    category: ECategories.protein,
    isAvailable: false,
    brand: 'Muscletech',
    image: 'https://s3.images-iherb.com/msc/msc70328/l/7.jpg',
  }, {
    name: 'Life Extension, Mix Tablets, 240 Tablets',
    description: `For true full-spectrum nutrition, try Life Extension Mix — the most complete multi-nutrient formula on the market!`,
    price: 55.50,
    category: ECategories.minerals,
    isAvailable: true,
    brand: 'Life Extension',
    image: 'https://s3.images-iherb.com/lex/lex22552/y/1.jpg',
  }, {
    name: 'Jarrow Formulas, Jarro-Dophilus EPS, 5 Billion',
    description: `EnteroGuard ensures the maximum survival of probiotic bacteria to the small intestines, and hence enhances.`,
    price: 29.37,
    category: ECategories.probiotics,
    isAvailable: true,
    brand: 'Jarrow Formulas',
    image: 'https://s3.images-iherb.com/jrw/jrw03024/l/7.jpg',
  }, {
    name: `Nature's Answer, Liquid Omega-3, Deep Sea Fish Oil`,
    description: `Fish Oil provides, molecularly distilled, nitrogen flushed fish oil, harvested in clean waters of the North Atlantic`,
    price: 16.21,
    category: ECategories.supplements,
    isAvailable: true,
    brand: `Nature's Answer`,
    image: 'https://s3.images-iherb.com/nta/nta26137/l/5.jpg',
  }, {
    name: `Doctor's Best, SAM-e, 400 mg , Double-Strength`,
    description: `SAM-e is concentrated in the liver and brain and has multiple mechanisms of action in the body.`,
    price: 19.52,
    category: ECategories.supplements,
    isAvailable: true,
    brand: `Doctor's Best`,
    image: 'https://s3.images-iherb.com/drb/drb00151/l/5.jpg',
  }];

  constructor() { }

  getProducts(): Product[] {
    return [...this.products];
  }


}
