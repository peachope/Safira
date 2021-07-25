import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../models/product';

const apiUrl = 'http://localhost:3000/products';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  products: Product[] = [];
  product: Product | undefined;

  constructor(private http: HttpClient) {}
  getListProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl).pipe(
      tap((_) => {
        console.log('Fetch product list');
      }),
      catchError(this.handleError<Product[]>('Fetch products', []))
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${apiUrl}/${id}`).pipe(
      tap((_) => {
        console.log(`Fetch Product ${id}`);
      }),
      catchError(this.handleError<Product>(`Fetch product ${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
