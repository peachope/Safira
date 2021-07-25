import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductServiceService } from './product-service.service';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { map } from 'rxjs/operators';

const cartUrl = 'http://localhost:3000/cart';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  constructor(
    private productService: ProductServiceService,
    private http: HttpClient
  ) {}
  getListCartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: Cart[] = [];

        for (let item of result) {
          let productExists = false;

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++;
              productExists = true;
              break;
            }
          }
          if (!productExists) {
            cartItems.push(new Cart(item.id, item.product));
          }
        }
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
}
