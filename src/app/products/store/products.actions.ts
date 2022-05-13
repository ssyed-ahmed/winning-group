import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';

const loadProducts = createAction('[products][fetch]');

const loadProductsSuccess = createAction(
  '[products][fetch][success]',
  props<{ products: Array<Product> }>()
);

const loadProductsError = createAction('[products][fetch][error]');

export const ProductsActions = {
  loadProducts,
  loadProductsError,
  loadProductsSuccess,
};
