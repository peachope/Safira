import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import {Observable,of, throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../models/product';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  products :Product[] = []
  product : Product | undefined
  private productsUrl: string = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json?fbclid=IwAR0MPdHL1Wzzk7odGvT0-wPx3TTalUCmBWhbN3g66Awj-vM0lS03r7ug9oc';
  
  constructor(private http: HttpClient) { }
  getListProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap((_ =>{
        console.log("Fetch product list");
      })
    ),
    catchError(this.handleError<Product[]>('Fetch producs',[]))
    )
  }

  getProduct(id:number):Observable<Product>{
      return this.http.get<Product>(`${this.productsUrl}/${id}`).pipe(
        tap((_ => {
          console.log(`Fetch Product ${id}`);
        })),
        catchError(this.handleError<Product>(`Fetch Product ${id}`)
      ))
  }
    
  
    private handleError<T>(operation = 'operation', result?: T) {
        return (error:any) : Observable<T> =>{
            console.log(error);
            return of(result as T);
        }
    }

}
