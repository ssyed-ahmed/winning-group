import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import { addToCart, removeFromCart } from './shopping-cart.actions';

export interface ShoppingCartItem {
    product: Product;
    quantity: number;
}

export interface ShoppingCartState {
    items: Array<ShoppingCartItem>;
}

export const initialState: ShoppingCartState = {
    items: [],
};

export const ShoppingCartReducer = createReducer(
    initialState,
    on(addToCart, (state, action) => {
        const product = action.product;
        const existingItems = state.items.slice();
        const foundItem = existingItems.find(item => item.product.sku === product.sku);
        if (foundItem) {
            const newItem = {
                ...foundItem,
                quantity: foundItem.quantity + 1,
            };
            const foundItemIndex = existingItems.findIndex(item => item.product.sku === product.sku);
            existingItems[foundItemIndex] = newItem;
            return {
                ...state,
                items: existingItems,
            };
        } else {
            const newItem = {
                product: action.product,
                quantity: 1,
            };
            return {
                ...state,
                items: [...state.items, newItem],
            };
        }
    }),
    on(removeFromCart, (state, action) => {
        let items = [...state.items].slice();
        const product = action.product;
        const newProducts = items.filter(item => item.product.sku !== product.sku);
        return {
            ...state,
            products: newProducts,
        };
    })
)