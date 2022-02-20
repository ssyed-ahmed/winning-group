import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ShoppingCartItem } from './store/shopping-cart.reducer';
import { Observable } from 'rxjs';
import { ShoppingCartSelectors } from './store/shopping-cart.selector';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,    
})
export class ShoppingCartComponent implements OnInit {

    items$: Observable<Array<ShoppingCartItem>>;

    constructor(private store: Store) {}

    public ngOnInit(): void {
        this.store.select(ShoppingCartSelectors.shoppingCart).subscribe(items => {
            console.log(items);
        });
    }
}