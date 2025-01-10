import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { brandListResponse } from './response.interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private url = 'http://localhost:4000/brand';

  constructor(private http: HttpClient) {}

  getBrands(): Observable<brandListResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': sessionStorage['token']
      })
    };
    return this.http.get<brandListResponse>(this.url, httpOptions);
  }
}
