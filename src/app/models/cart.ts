import { Product } from './product';

export interface Cart {
  id: number;
  productId: number;
  productTitle: string;
  qty: number;
  price: number;
  product: Product;
}
