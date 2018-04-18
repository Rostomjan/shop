import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  static setItem(item: string, value: string): void {
    localStorage.setItem(item, value);
  }

  static getItem(item: string): string {
    return localStorage.getItem(item);
  }

  static removeItem(item: string): void {
    localStorage.removeItem(item);
  }

}
