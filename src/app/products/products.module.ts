import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsFeatureKey } from './store/products.selector';
import { productsReducer } from './store/products.reducer';
import { ProductsEffects } from './store/products.effects';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  declarations: [ProductsComponent, ProductComponent],
})
export class ProductsModule {}
