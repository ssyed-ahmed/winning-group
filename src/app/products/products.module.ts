import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductModalComponent } from './product-modal/product-modal.component';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
    ],
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductModalComponent,
    ],
    entryComponents: [ProductModalComponent],
})
export class ProductsModule {}
