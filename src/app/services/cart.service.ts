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
      tap((_) => {
        console.log('Fetch cart list');
      }),
      catchError(this.handleError<Cart[]>('Fetch carts', []))
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
}
