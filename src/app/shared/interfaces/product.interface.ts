export enum ECategories {
  minerals = 'Minerals',
  probiotics = 'Probiotics',
  protein = 'Protein',
  supplements = 'Supplements',
  vitamins = 'Vitamins',
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ECategories;
  isAvailable: boolean;
  brand: string;
  image: string;
  reviews: Array<{name: string, msg: string}>;
  quantity?: number;
}

export class Product implements IProduct {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public category: ECategories,
    public isAvailable: boolean,
    public brand: string,
    public image: string,
    public reviews: Array<{name: string, msg: string}>,
    quantity?: number
  ) { }
}
