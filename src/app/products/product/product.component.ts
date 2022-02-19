import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  public ngOnInit(): void {

  }

  public addToCart(product: Product): void {
    console.log('add to cart', product);
  }

  public compareProducts(product: Product): void {
    console.log('compare products', product);
  }
}