import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product.model";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/shopping-cart/store/shopping-cart.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private modalService: NgbModal,
    private store: Store,
  ) {}

  public ngOnInit(): void {

  }

  public addToCart(product: Product, modalContent: any): void {
    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.componentInstance.product = this.product;
    this.store.dispatch(addToCart({product}));
  }

  public compareProducts(product: Product): void {
    
  }
}