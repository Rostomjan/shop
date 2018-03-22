export interface Product {
  name: string;
  description: string;
  price: number;
  category: ECategories;
  isAvailable: boolean;
  brand: string;
  image: string;
  quntity?: number;
}

export enum ECategories {
  minerals = 'Minerals',
  probiotics = 'Probiotics',
  protein = 'Protein',
  supplements = 'Supplements',
  vitamins = 'Vitamins',
}