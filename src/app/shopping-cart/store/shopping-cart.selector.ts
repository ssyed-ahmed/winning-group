import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingCartState } from './shopping-cart.reducer';

export const shoppingCartFeatureKey = 'shoppingCart';

const shoppingCartFeature = createFeatureSelector<ShoppingCartState>(shoppingCartFeatureKey);

const shoppingCart = createSelector(shoppingCartFeature, shoppingCartState => shoppingCartState.items);

export const ShoppingCartSelectors = {
    shoppingCart,
};