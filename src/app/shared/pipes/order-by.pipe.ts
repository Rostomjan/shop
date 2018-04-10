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
        flag ? arr.sort((a: IProduct, b: IProduct): number => {
          if (a.brand < b.brand) {
            return -1;
          }
          if (a.brand > b.brand) {
            return 1;
          }
          return 0;
        })
        : arr.sort((a: IProduct, b: IProduct): number => {
          if (a.brand > b.brand) {
            return -1;
          }
          if (a.brand < b.brand) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        return [];
    }
    return arr;
  }

}
