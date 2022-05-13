import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ProductsActions } from './products/store/products.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'winning-group';

  currentRoute: string;

  constructor(private router: Router, private readonly store: Store) {}

  public ngOnInit(): void {
    this.loadProducts();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = (event as any).url;
      });
  }

  public showCart(): void {
    this.router.navigate(['/shopping-cart']);
  }

  private loadProducts(): void {
    this.store.dispatch(ProductsActions.loadProducts());
  }
}
