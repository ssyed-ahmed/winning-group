import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product.model";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private modalService: NgbModal) {}

  public ngOnInit(): void {

  }

  public addToCart(product: Product, modalContent: any): void {
    console.log('add to cart', product);
    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.componentInstance.product = this.product;
  }

  public compareProducts(product: Product): void {
    console.log('compare products', product);
  }
}