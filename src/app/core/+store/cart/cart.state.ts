import { IProduct } from '../../../shared/interfaces';

export interface CartState {
  entities: ReadonlyArray<IProduct>;
  readonly total: number;
  readonly len: number;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialCartState: CartState = {
  entities: [],
  total: 0,
  len: 0,
  loading: false,
  loaded: false,
  error: null
};
