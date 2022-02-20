import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async(() => {
    const routerMock = jasmine.createSpyObj<Router>(['navigate']);
    routerMock.navigate.and.callThrough();

    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {
          provide: Router,
          useValue: routerMock,
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('gotoProducts()', () => {
    it('should call the navigate method', () => {
      component.gotoProducts();
      expect(router.navigate).toHaveBeenCalledWith(['/products']);
    });
  });
});
