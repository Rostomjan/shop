import { Injectable } from '@angular/core';

import { IProduct, ECategories, Product } from '../shared/interfaces';

@Injectable()
export class ProductService {

  readonly products: IProduct[] = [
    new Product('Life Extension, Two-Per-Day Capsules, 120 Capsules',
      `Thise multivitamins have the highest nutritional potencies of any science-based multivitamin formula.`,
      18.00,
      ECategories.vitamins,
      true,
      'Life Extension',
      'https://s3.images-iherb.com/lex/lex22141/l/1.jpg'),
    new Product('BSN, Protein Crisp, Packed Prtein Barl',
      `For Healthy Adults, consume enough protein to meet your daily protein requirement with a combination of foods.`,
      21.74,
      ECategories.protein,
      true,
      'BSN',
      'https://s3.images-iherb.com/bsn/bsn90693/l/5.jpg'),
    new Product('Natural Vitality, Natural Calm, The Anti-Stress Drink',
      `Magnesium and calcium are fundamental nutrients that need to be in balance with each other fully experience good health.`,
      23.97,
      ECategories.minerals,
      true,
      'Natural Vitality',
      'https://s3.images-iherb.com/ptg/ptg00002/l/13.jpg'),
    new Product('Jarrow Formulas, Jarro-Dophilus EPS, 5 Billion',
      `EnteroGuard ensures the maximum survival of probiotic bacteria to the small intestines, and hence enhances.`,
      29.37,
      ECategories.probiotics,
      true,
      'Jarrow Formulas',
      'https://s3.images-iherb.com/jrw/jrw03024/l/7.jpg'),
    new Product(`Nature's Answer, Liquid Omega-3, Deep Sea Fish Oil`,
      `Fish Oil provides, molecularly distilled, nitrogen flushed fish oil, harvested in clean waters of the North Atlantic`,
      16.21,
      ECategories.supplements,
      true,
      'Nature\'s Answer',
      'https://s3.images-iherb.com/nta/nta26137/l/5.jpg'),
    new Product(`Doctor's Best, SAM-e, 400 mg , Double-Strength`,
      `SAM-e is concentrated in the liver and brain and has multiple mechanisms of action in the body.`,
      19.52,
      ECategories.supplements,
      true,
      `Doctor's Best`,
      'https://s3.images-iherb.com/drb/drb00151/l/5.jpg'),
    new Product('Muscletech, NitroTech, Whey Peptides',
      `Nitro-Tech is a scientifically engineered whey + isolate lean musclebuilder formula designed for all athletes.`,
      57.42,
      ECategories.protein,
      false,
      'Muscletech',
      'https://s3.images-iherb.com/msc/msc70328/l/7.jpg')
  ];

  constructor() { }

  getProducts(): Product[] {
    return [...this.products];
  }
}
