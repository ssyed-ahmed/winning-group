import { ProductComponent } from "./product.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { shoppingCartFeatureKey } from 'src/app/shopping-cart/store/shopping-cart.selector';
import { initialState } from 'src/app/shopping-cart/store/shopping-cart.reducer';
import { Product } from 'src/app/shared/models/product.model';
import { addToCart } from 'src/app/shopping-cart/store/shopping-cart.actions';
import { By } from '@angular/platform-browser';

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;
    let mockStore: MockStore;

    beforeEach(async(() => {
        const modalServiceMock = jasmine.createSpyObj<NgbModal>(['open']);
        modalServiceMock.open.and.returnValue(
            { componentInstance: {
                product: null,
            } } as NgbModalRef);
        TestBed.configureTestingModule({
            declarations: [ ProductComponent ],
            providers: [
                {
                    provide: NgbModal,
                    useValue: modalServiceMock,
                },
                provideMockStore({
                    initialState: {
                        [shoppingCartFeatureKey]: initialState,
                    },
                }),
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        mockStore = TestBed.get(MockStore);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('addToCart()', () => {
        it('should dispatch an action addToCart', () => {
            const dispatchSpy = spyOn(mockStore, 'dispatch');
            const product: Product = {
                sku: 'test',
                name: 'Test product',
                price: 100,
                rrp: 200,
                image: 'some-image',
            };

            component.addToCart(product);
            expect(dispatchSpy).toHaveBeenCalledWith(addToCart({product}));
        });
    });
});