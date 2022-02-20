import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-product-modal',
    templateUrl: './product-modal.component.html',
    styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {

    @Input() public product;

    constructor(private modalService: NgbModal) {}

    public ngOnInit(): void {
        
    }

    public closeModal(): void {
        this.modalService.dismissAll();
    }
}