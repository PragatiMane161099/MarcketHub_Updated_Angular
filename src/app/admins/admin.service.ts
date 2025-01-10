import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SigninResponse } from './response.interface'; 
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {
  private url = 'http://localhost:4000/admins'; 

  constructor(private Router: Router,private http: HttpClient) {}
  signin(email: string, password: string): Observable<SigninResponse> {
    const body = { email, password };
    return this.http.post<SigninResponse>(`${this.url}/signin`, body);
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!sessionStorage['token'])
      {
        this.Router.navigate(['/signin'])
        return false 
      }
      return true
  }
}
