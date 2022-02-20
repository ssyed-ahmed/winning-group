import { ProductComponent } from "./product.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { shoppingCartFeatureKey } from 'src/app/shopping-cart/store/shopping-cart.selector';
import { initialState } from 'src/app/shopping-cart/store/shopping-cart.reducer';

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;
    let mockStore: MockStore;

    beforeEach(async(() => {
        const modalServiceMock = jasmine.createSpyObj<NgbModal>(['open']);

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
});