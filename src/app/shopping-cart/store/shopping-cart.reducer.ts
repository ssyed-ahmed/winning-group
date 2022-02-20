import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, State, Action } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import { addToCart, removeFromCart } from './shopping-cart.actions';
import produce, { enableES5 } from 'immer';

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
        console.log('previous state', state);
        const product = action.product;
        const existingItems = state.items.slice();
        const foundItem = existingItems.find(item => item.product.sku === product.sku);
        if (foundItem) {
            const newItem = {
                ...foundItem,
                product: {...foundItem.product},
                quantity: foundItem.quantity + 1,
            };
            const foundItemIndex = existingItems.findIndex(item => item.product.sku === product.sku);
            existingItems[foundItemIndex] = newItem;
            const newState = {
                ...state,
                items: [...existingItems],
            };
            console.log('new state', state);
            return newState;
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

export function shoppingCartReducer(state: ShoppingCartState, action: Action): ShoppingCartState {
    enableES5();
    return produce(state, draft => ShoppingCartReducer(draft, action));
}