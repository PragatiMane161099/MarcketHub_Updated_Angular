import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListResponse } from './response.interface'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:4000/product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductListResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': sessionStorage['token']
      })
    };
    return this.http.get<ProductListResponse>(this.url, httpOptions);
  }
}
