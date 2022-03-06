import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsComponent } from './errors/errors.component';
import { shoppingCartReducer } from './shopping-cart/store/shopping-cart.reducer';
import { ProductModalComponent } from './products/product-modal/product-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    ProductModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({shoppingCart: shoppingCartReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductModalComponent],
})
export class AppModule { }
