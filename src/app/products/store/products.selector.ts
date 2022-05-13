import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';
import { values } from 'lodash-es';

export const productsFeatureKey = 'products';

const productsFeature = createFeatureSelector<ProductsState>(
  productsFeatureKey
);

const isLoading = createSelector(
  productsFeature,
  (productsState) => productsState.isLoading
);

const products = createSelector(productsFeature, (productsState) =>
  values(productsState.entities)
);

export const ProductsSelectors = {
  isLoading,
  products,
};
