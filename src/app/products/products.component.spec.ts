import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductsService } from './services/products.service';

import createSpyObj = jasmine.createSpyObj;
import { of } from 'rxjs';
import { Product } from '../shared/models/product.model';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let mockProductsService;
  const products: Array<Product> = [
    {"sku":"671695659-X","name":"Veal Inside - Provimi","price":166,"rrp":223,"image":"http://dummyimage.com/300x300.png/ff4444/ffffff"},
    {"sku":"740799661-X","name":"Milk - Condensed","price":165,"rrp":220,"image":"http://dummyimage.com/300x300.png/cc0000/ffffff"},
    {"sku":"296764728-4","name":"Juice - Ocean Spray Kiwi","price":131,"rrp":222,"image":"http://dummyimage.com/300x300.png/dddddd/000000"},
    {"sku":"910412149-X","name":"Island Oasis - Banana Daiquiri","price":160,"rrp":232,"image":"http://dummyimage.com/300x300.png/dddddd/000000"},
    {"sku":"039035536-4","name":"Tortillas - Flour, 8","price":83,"rrp":220,"image":"http://dummyimage.com/300x300.png/5fa2dd/ffffff"},
    {"sku":"841935264-0","name":"Champagne - Brights, Dry","price":121,"rrp":238,"image":"http://dummyimage.com/300x300.png/cc0000/ffffff"},
    {"sku":"848338752-2","name":"Sobe - Green Tea","price":119,"rrp":230,"image":"http://dummyimage.com/300x300.png/dddddd/000000"},
  ];

  beforeEach(async(() => {
    mockProductsService = createSpyObj<ProductsService>([
      'loadProducts'
    ]);
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [
        {
          provide: ProductsService,
          useValue: mockProductsService,
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.overrideTemplate(ProductsComponent, '');
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should return a list of products', () => {
      const products$ = mockProductsService.loadProducts.and.returnValue(of(products));
      component.ngOnInit();
      expect(component.products$).toEqual(products$);
    });
  });
});
