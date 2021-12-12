import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Product } from 'src/app/shared/interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/products`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addCart(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.baseUrl}/cart`, product);
  }
}
