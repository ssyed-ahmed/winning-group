import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { StoreModule } from '@ngrx/store';
import { shoppingCartFeatureKey } from './store/shopping-cart.selector';
import { shoppingCartReducer } from './store/shopping-cart.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    StoreModule.forFeature(shoppingCartFeatureKey, shoppingCartReducer),
  ],
  declarations: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
