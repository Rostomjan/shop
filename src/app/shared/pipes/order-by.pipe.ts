import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../interfaces';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(arr: IProduct[], value: string, flag: boolean = false): any {
    if (arr == null) {
      return [];
    }
    switch (value) {
      case 'price':
        arr.sort((a: IProduct, b: IProduct): number => {
          return flag ? a.price - b.price
            : b.price - a.price;
        });
        break;
      case 'quantity':
        arr.sort((a: IProduct, b: IProduct): number => {
          return flag ? a.quantity - b.quantity
            : b.quantity - a.quantity;
        });
        break;
      case 'brand':
        arr.sort((a: IProduct, b: IProduct): number => {
          return flag ? a.brand.localeCompare(b.brand)
            : b.brand.localeCompare(a.brand);
        });
        break;
    }
    return arr;
  }

}
