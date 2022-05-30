import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private JSON_URL = '/assets/mock/MOCK_DATA.json';

  constructor(private readonly http: HttpClient) {}

  public loadProducts(): Observable<any> {
    return this.http.get(this.JSON_URL).pipe(
      catchError((err) => {
        console.log('Error occurred - ', err);
        throw new Error(err);
      })
    );
  }
}
