import { Injectable } from '@angular/core';

import { IProduct, ECategories, Product } from '../shared/interfaces';

@Injectable()
export class ProductService {

  readonly products: IProduct[] = [
    new Product(
      this.generateId(),
      'Life Extension, Two-Per-Day Capsules, 120 Capsules',
      `Life Extension’s Two Per Day multivitamins have the highest nutritional potencies of any science-based multivitamin
      formula that can fit inside two capsules or Capsules. This gives you far more of the essential vitamins, minerals and
      health-promoting nutrients than typical store-bought formulas … and it does so at a very economical price. Why is this so
      important? While Recommended Daily Allowances (RDAs) were developed by the government, they only provide the minimal doses
      to protect you from deficiency. Research studies demonstrate that unless you’re taking the ideal dose of vitamins and minerals,
      you won’t fully receive their benefits for optimal health and well-being.
      Two-Per-Day now contains three potent forms of selenium (SelenoExcell, Se-methyl-selenocysteine, and sodium selenite). Also newly
      included is apigenin, a powerful bioflavonoid found in many vegetables and fruits which boosts cell protection.`,
      18.00,
      ECategories.vitamins,
      true,
      'Life Extension',
      'https://s3.images-iherb.com/lex/lex22141/l/1.jpg',
      [
        {name: 'Jacque Fresco', msg: 'Great product!'},
        {name: 'Drew', msg: 'The fish oil was delivered within a couple of days. Professionally Packaged, boxed, bubble rapped, cushioned'},
        {name: 'Dave Chappelle', msg: 'Comparable to brands that cost twice as much. No fish burps at all.'}
      ]),
    new Product(
      this.generateId(),
      'BSN, Protein Crisp, Packed Protein Bars',
      `For Healthy Adults, consume enough protein to meet your daily protein requirement with a combination of high protein foods and
      protein supplements throughout the day as part of a balanced diet and exercise program.`,
      21.74,
      ECategories.protein,
      true,
      'BSN',
      'https://s3.images-iherb.com/bsn/bsn90693/l/5.jpg',
      [
        {name: 'Jacque Fresco', msg: 'Great product!'},
        {name: 'Drew', msg: 'The fish oil was delivered within a couple of days. Professionally Packaged, boxed, bubble rapped, cushioned'},
        {name: 'Dave Chappelle', msg: 'Comparable to brands that cost twice as much. No fish burps at all.'}
      ]),
    new Product(
      this.generateId(),
      'Natural Vitality, Natural Calm, The Anti-Stress Drink',
      `Magnesium and calcium are fundamental nutrients that need to be in balance with each other in order for you to fully experience good
      health. Their importance on a cellular level is critical. Calcium and magnesium are like opposite sides of a coin. Calcium excites
      nerves, while magnesium calms them down. Calcium makes muscles contract. Magnesium is necessary for muscles to relax. Calcium is
      needed for blood clotting, but magnesium keeps the blood flowing freely.`,
      23.97,
      ECategories.minerals,
      true,
      'Natural Vitality',
      'https://s3.images-iherb.com/ptg/ptg00002/l/13.jpg',
      [
        {name: 'Jacque Fresco', msg: 'Great product!'},
        {name: 'Drew', msg: 'The fish oil was delivered within a couple of days. Professionally Packaged, boxed, bubble rapped, cushioned'},
        {name: 'Dave Chappelle', msg: 'Comparable to brands that cost twice as much. No fish burps at all.'}
      ]),
    new Product(
      this.generateId(),
      'Jarrow Formulas, Jarro-Dophilus EPS, 5 Billion',
      `EnteroGuard ensures the maximum survival of probiotic bacteria to the small intestines, and hence enhances their effectiveness.
      Jarro-Dophilus EPS is ideal for traveling when refrigeration is not readily available. Capsules are individually blister packed to
      help ensure shelf stability.`,
      29.37,
      ECategories.probiotics,
      true,
      'Jarrow Formulas',
      'https://s3.images-iherb.com/jrw/jrw03024/l/7.jpg',
      [
        {name: 'Jacque Fresco', msg: 'Great product!'},
        {name: 'Drew', msg: 'The fish oil was delivered within a couple of days. Professionally Packaged, boxed, bubble rapped, cushioned'},
        {name: 'Dave Chappelle', msg: 'Comparable to brands that cost twice as much. No fish burps at all.'}
      ]),
    new Product(
      this.generateId(),
      `Nature's Answer, Liquid Omega-3, Deep Sea Fish Oil`,
      `Omega-3 Fish Oil provides, molecularly distilled, nitrogen flushed fish body oil, harvested in the cold, clean waters of the North
      Atlantic. This oil naturally provides essential Omega-3 fatty acids, including EPA and DHA.
      Nature's Answer. High-quality natural products for vital, healthy lifestyles since 1972. FDA Registered, Pharmaceutically licensed,
      cGMP facility.`,
      16.21,
      ECategories.supplements,
      true,
      'Nature\'s Answer',
      'https://s3.images-iherb.com/nta/nta26137/l/5.jpg',
      [
        {name: 'Jacque Fresco', msg: 'Great product!'},
        {name: 'Drew', msg: 'The fish oil was delivered within a couple of days. Professionally Packaged, boxed, bubble rapped, cushioned'},
        {name: 'Dave Chappelle', msg: 'Comparable to brands that cost twice as much. No fish burps at all.'}
      ]),
    new Product(
      this.generateId(),
      `Doctor's Best, SAM-e, 400 mg , Double-Strength`,
      `SAM-e (S-Adenosyl Methionine) is derived from the amino acids methionine and ATP (Adenosine Triphosphate). ATP is normally
      synthesized in the body but may become depleted from sickness and aging. SAM-e is concentrated in the liver and brain and has
      multiple mechanisms of action in the body. As a major methyl donor, it synthesizes hormones, nucleic acids, proteins, phospholipids,
      catecholamines, and other neurotransmitters.`,
      19.52,
      ECategories.supplements,
      true,
      `Doctor's Best`,
      'https://s3.images-iherb.com/drb/drb00151/l/5.jpg',
      [
        {name: 'Jacque Fresco', msg: 'Great product!'},
        {name: 'Drew', msg: 'The fish oil was delivered within a couple of days. Professionally Packaged, boxed, bubble rapped, cushioned'},
        {name: 'Dave Chappelle', msg: 'Comparable to brands that cost twice as much. No fish burps at all.'}
      ]),
    new Product(
      this.generateId(),
      'Muscletech, NitroTech, Whey Peptides',
      `Nitro-Tech is a scientifically engineered whey + isolate lean musclebuilder formula designed for all athletes who are looking for
      more muscle, more strength and better performance. Nitro-Tech contains protein sourced primarily from whey protein peptides and whey
      isolate - two of the cleanest and purest protein sources available to athletes. Nitro-Tech is also enhanced with the most studied form
      or creatine for even better gains in muscle and strength.`,
      57.42,
      ECategories.protein,
      false,
      'Muscletech',
      'https://s3.images-iherb.com/msc/msc70328/l/7.jpg',
      [
        {name: 'Jacque Fresco', msg: 'Great product!'},
        {name: 'Drew', msg: 'The fish oil was delivered within a couple of days. Professionally Packaged, boxed, bubble rapped, cushioned'},
        {name: 'Dave Chappelle', msg: 'Comparable to brands that cost twice as much. No fish burps at all.'}
      ])
  ];

  constructor() { }

  getProducts(): Promise<IProduct[]> {
    return new Promise(((resolve) => {
      resolve([...this.products]);
    }))
      .catch(err => err);
  }

  getProduct(id: string): Promise<IProduct> {
    return new Promise(resolve => {
      resolve(this.products.find(el => el.id === id));
    })
      .catch(err => err);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2);
  }
}
