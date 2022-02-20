import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';

export const addToCart = createAction(
    '[cart][addToCart]',
    props<{product: Product}>(),
)

export const removeFromCart = createAction(
    '[cart][removeFromCart]',
    props<{product: Product}>(),
)