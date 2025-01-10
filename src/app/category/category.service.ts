import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryListResponse } from './response.interface'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:4000/category';

  constructor(private http: HttpClient) {}

  addCategory(title: string, description:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': sessionStorage['token']
      })
    };
    const body = {
      title: title,
      description: description
    }
    return this.http.post<CategoryListResponse>(this.url, body, httpOptions);
  }

  editCategory(id: number, title: string, description: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': sessionStorage['token']
      })
    };
    const body = {
      title: title,
      description: description //this.url + "/" + id
    }
    return this.http.put<CategoryListResponse>(`${this.url}/${id}`, body, httpOptions)
    //return this.http.put<CategoryListResponse>(`${this.url}/${id}`, body, httpOptions);
    /*const resp = this.http.put(this.url + "/" + id, body, httpOptions);//`${this.url}/${id}`
    console.log(resp)
    return resp*/
  }

  getCategories(): Observable<CategoryListResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': sessionStorage['token']
      })
    };
    return this.http.get<CategoryListResponse>(this.url, httpOptions);
  }

  deleteCategories(id: number): Observable<CategoryListResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': sessionStorage['token']
      })
    };
    return this.http.delete<CategoryListResponse>(this.url + "/" + id , httpOptions);
  }
}
