import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ShoppingCartItem } from './store/shopping-cart.reducer';
import { Observable, BehaviorSubject } from 'rxjs';
import { ShoppingCartSelectors } from './store/shopping-cart.selector';
import { tap } from 'rxjs/operators';
import { removeFromCart } from './store/shopping-cart.actions';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,    
})
export class ShoppingCartComponent implements OnInit {

    items$: Observable<Array<ShoppingCartItem>>;

    private total$: BehaviorSubject<number> = new BehaviorSubject(0);

    constructor(private store: Store) {}

    public ngOnInit(): void {
        this.items$ = this.store.select(ShoppingCartSelectors.shoppingCart);
        this.calculateTotal();
    }

    public removeItemFromCart(item: ShoppingCartItem): void {
        const product = item.product;
        this.store.dispatch(removeFromCart({product}));
    }

    public calculateTotal(): void {
        this.items$.subscribe(items => {
            let total = 0;
            items.forEach(item => {
                total += (item.product.price * item.quantity);
            });
            this.total$.next(total);
        });
    }
}