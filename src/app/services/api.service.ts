import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  APIUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    const data = this.http.get(this.APIUrl + '/products');
    return data;
  }

  getProduct(id): Observable<any> {
    const data = this.http.get(`${this.APIUrl}/products/${id}`);
    return data;
  }

  getCategories(): Observable<any> {
    const data = this.http.get(this.APIUrl + '/categories');
    return data;
  }
}
