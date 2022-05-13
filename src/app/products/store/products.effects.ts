import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsActions } from './products.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private productsService: ProductsService
  ) {}

  public loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() => {
        console.log('in effects');
        return this.productsService.loadProducts().pipe(
          map((products) => ProductsActions.loadProductsSuccess({ products })),
          catchError(() => of(ProductsActions.loadProductsError()))
        );
      })
    )
  );
}
