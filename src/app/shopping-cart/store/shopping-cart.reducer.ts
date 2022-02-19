import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import { addToCart, removeFromCart } from './shopping-cart.actions';

export interface ShoppingCart {
    products: Array<Product>;
}

export const initialState: ShoppingCart = {
    products: [],
};

export const ShoppingCartReducer = createReducer(
    initialState,
    on(addToCart, (state, action) => {
        return {
            ...state,
            products: [...state.products, action.product],
        };
    }),
    on(removeFromCart, (state, action) => {
        let products = [...state.products];
        const productId = action.productId;
        const newProducts = products.filter(product => product.sku !== productId);
        return {
            ...state,
            products: newProducts,
        };
    })
)