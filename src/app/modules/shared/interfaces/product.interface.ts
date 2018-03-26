export enum ECategories {
  minerals = 'Minerals',
  probiotics = 'Probiotics',
  protein = 'Protein',
  supplements = 'Supplements',
  vitamins = 'Vitamins',
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: ECategories;
  isAvailable: boolean;
  brand: string;
  image: string;
  quantity?: number;
}

export class Product implements IProduct {
  constructor (
    public name: string,
    public description: string,
    public price: number,
    public category: ECategories,
    public isAvailable: boolean,
    public brand: string,
    public image: string,
    public quantity?: number
  ) { }
}
