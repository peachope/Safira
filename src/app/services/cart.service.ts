import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
import { Cart } from '../models/cart';
import { map, tap, catchError } from 'rxjs/operators';
import { cartUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  getCartItems(): Observable<Cart[]> {
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
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }

  deleteCart(id: number): Observable<Cart> {
    const url = `${cartUrl}/${id}`;

    return this.http.delete<Cart>(url).pipe(
      tap((_) => {
        console.log(`deleted hero id=${id}`);
      }),
      catchError(this.handleError<Cart>('deleteCart'))
    );
  }
}
