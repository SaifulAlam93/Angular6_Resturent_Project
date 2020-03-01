import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductditailsComponent } from './productditails.component';

describe('ProductditailsComponent', () => {
  let component: ProductditailsComponent;
  let fixture: ComponentFixture<ProductditailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductditailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductditailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
