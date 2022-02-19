import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './products/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingCartReducer } from './shopping-cart/store/shopping-cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    ProductModalComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({shoppingCart: ShoppingCartReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductModalComponent],
})
export class AppModule { }
