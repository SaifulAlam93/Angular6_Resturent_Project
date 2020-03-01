import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutloginComponent } from './checkoutlogin.component';

describe('CheckoutloginComponent', () => {
  let component: CheckoutloginComponent;
  let fixture: ComponentFixture<CheckoutloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
