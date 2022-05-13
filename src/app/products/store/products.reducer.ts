import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsActions } from './products.actions';
import produce, { enableES5 } from 'immer';

export interface ProductsState extends EntityState<Product> {
  isLoading: boolean;
  selectedProduct: string;
}

export function selectProduct(product: Product): string {
  return product.sku;
}

export function sortByName(a: Product, b: Product): number {
  return a.name.localeCompare(b.name);
}

export const productsAdapter: EntityAdapter<Product> = createEntityAdapter<Product>(
  {
    selectId: selectProduct,
    sortComparer: sortByName,
  }
);

export const productsInitialState: ProductsState = productsAdapter.getInitialState(
  {
    isLoading: false,
    selectedProduct: null,
  }
);

const _productsReducer = createReducer(
  productsInitialState,

  on(ProductsActions.loadProducts, (state) => {
    state.isLoading = true;
    return state;
  }),

  on(ProductsActions.loadProductsSuccess, (state, { products }) => {
    state = productsAdapter.addAll(products, state);
    state.isLoading = false;
    return state;
  }),

  on(ProductsActions.loadProductsError, (state) => {
    state.isLoading = false;
    return state;
  })
);

export function productsReducer(
  state: ProductsState,
  action: Action
): ProductsState {
  enableES5();
  return produce(state, (draft) => _productsReducer(draft, action));
}
