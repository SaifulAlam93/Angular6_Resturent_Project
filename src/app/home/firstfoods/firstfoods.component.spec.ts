import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstfoodsComponent } from './firstfoods.component';

describe('FirstfoodsComponent', () => {
  let component: FirstfoodsComponent;
  let fixture: ComponentFixture<FirstfoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstfoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
