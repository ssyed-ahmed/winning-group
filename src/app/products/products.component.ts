import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';
import { ProductsService } from './services/products.service';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ProductsSelectors } from './store/products.selector';
import { ProductsActions } from './store/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Array<Product>>;

  constructor(
    private readonly store: Store,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.store.dispatch(ProductsActions.loadProducts());
    this.handleProductsLoadSuccess();
  }

  private handleProductsLoadSuccess(): void {
    this.products$ = this.store.select(ProductsSelectors.products);
  }
}
