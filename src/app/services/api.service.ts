import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  APIUrl =
    'https://medieinstitutet-wie-products.azurewebsites.net/api/products';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const test = this.http.get(this.APIUrl);
    return test;
  }
}
