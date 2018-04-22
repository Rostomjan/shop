import { IProduct } from '../../../shared/interfaces';

export interface CartState {
  data: ReadonlyArray<IProduct>;
  error: Error | string;
}

export const initialCartState: CartState = {
  data: [],
  error: null
};
