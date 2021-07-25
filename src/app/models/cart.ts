import { Product } from './product';

export class Cart {
  id: number;
  productId?: number;
  productTitle: string;
  qty: number;
  price: number;
  image: string;
  category: string;
  constructor(id: number, product: Product, qty = 1) {
    this.id = id;
    this.productId = product.id;
    this.productTitle = product.name;
    this.price = product.price;
    this.qty = qty;
    this.image = product.image;
    this.category = product.category;
  }
}
